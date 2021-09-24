/*
type responseToCart = { 
    body?: string, 
    extra?: string, 
    error?: string
}
*/

const ui /* : UI */ = new UI();
const cart /* : Cart */ = new Cart();

window.onload = loadTable

function loadTable() /* : Void */ {
    const products /* : object */ = cart.getProducts();
    const responseToCart /* : responseToCart */ = ui.appendOnCart(products);

    console.log(responseToCart)

    if (responseToCart.error) document.getElementById("cartErrorMessage").innerHTML = responseToCart.error;
    else {
        document.getElementById("tBody").innerHTML = responseToCart.body;
        document.getElementById("total").innerHTML = responseToCart.extra;

        for (const reduceOneButton of document.getElementsByClassName("reduceOneButton")) {
            reduceOneButton.addEventListener("click", (e /* : HTMLElement */ ) /* : Void */ => {
                cart.removeFromCart(e.target.parentElement.nextElementSibling.innerHTML)
                loadTable();
            })
        }
        for (const increaseOneButton of document.getElementsByClassName("increaseOneButton")) {
            increaseOneButton.addEventListener("click", (e /* : HTMLElement */ ) /* : Void */ => {
                cart.lastMomentAppendToCart(e.target.parentElement.nextElementSibling.innerHTML)
                loadTable();
            })
        }
    };

    updateQuantityProducts(cart.getQuantityProducts());
}

function closeCart() /* : Void */ {
    cart.close();
    loadTable();
}
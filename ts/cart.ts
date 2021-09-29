window.onload = loadTable

function loadTable() : void {
    const products : cartProducts = cart.getProducts();
    const responseToCart : responseToCart = UI.appendOnCart(products);

    if (responseToCart.error) document.getElementById("cartErrorMessage").innerHTML = responseToCart.error;
    else {
        document.getElementById("tBody").innerHTML = responseToCart.body;
        document.getElementById("total").innerHTML = responseToCart.extra;

        for (const reduceOneButton of Array.from(document.getElementsByClassName("reduceOneButton"))) {
            reduceOneButton.addEventListener("click", (e : Event) : void => {
                if (e.target instanceof HTMLElement) {
                    cart.removeFromCart(e.target.parentElement.nextElementSibling.innerHTML)
                    loadTable();
                }
            })
        }
        for (const increaseOneButton of Array.from(document.getElementsByClassName("increaseOneButton"))) {
            increaseOneButton.addEventListener("click", (e : Event) : void => {
                if (e.target instanceof HTMLElement) {
                    cart.lastMomentAppendToCart(e.target.parentElement.nextElementSibling.innerHTML)
                    loadTable();
                }
            })
        }
    };

    updateQuantityProducts(cart.getQuantityProducts());
}

function closeCart() : void {
    cart.close();
    loadTable();
}
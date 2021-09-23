const ui = new UI();
const cart = new Cart();
const tBody = document.getElementById("tBody");
const totalHTML = document.getElementById("total");

window.onload = loadTable

function loadTable() {
    const products = cart.getProducts();
    ui.appendOnCart(products);

    for (const reduceOneButton of document.getElementsByClassName("reduceOneButton")) {
        reduceOneButton.addEventListener("click", (e) => {
            cart.removeFromCart(e.target.parentElement.nextElementSibling.innerHTML)
            loadTable();
        })
    }
    for (const reduceOneButton of document.getElementsByClassName("increaseOneButton")) {
        reduceOneButton.addEventListener("click", (e) => {
            cart.lastMomentAppendToCart(e.target.parentElement.nextElementSibling.innerHTML)
            loadTable();
        })
    }
}

function closeCart() {
    cart.close();
    loadTable();
}
const ui = new UI();
const cart = new Cart();
const tBody = document.getElementById("tBody");
const totalHTML = document.getElementById("total");

window.onload = () => {
    const products = cart.getProducts();
    ui.appendOnCart(products)
}
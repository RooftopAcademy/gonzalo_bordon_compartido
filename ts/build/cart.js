"use strict";
window.onload = loadTable;
function loadTable() {
    var products = cart.getProducts();
    var responseToCart = UI.appendOnCart(products);
    if (responseToCart.error)
        document.getElementById("cartErrorMessage").innerHTML = responseToCart.error;
    else {
        document.getElementById("tBody").innerHTML = responseToCart.body;
        document.getElementById("total").innerHTML = responseToCart.extra;
        for (var _i = 0, _a = Array.from(document.getElementsByClassName("reduceOneButton")); _i < _a.length; _i++) {
            var reduceOneButton = _a[_i];
            reduceOneButton.addEventListener("click", function (e) {
                if (e.target instanceof HTMLElement) {
                    cart.removeFromCart(e.target.parentElement.nextElementSibling.innerHTML);
                    loadTable();
                }
            });
        }
        for (var _b = 0, _c = Array.from(document.getElementsByClassName("increaseOneButton")); _b < _c.length; _b++) {
            var increaseOneButton = _c[_b];
            increaseOneButton.addEventListener("click", function (e) {
                if (e.target instanceof HTMLElement) {
                    cart.lastMomentAppendToCart(e.target.parentElement.nextElementSibling.innerHTML);
                    loadTable();
                }
            });
        }
    }
    ;
    updateQuantityProducts(cart.getQuantityProducts());
}
function closeCart() {
    cart.close();
    loadTable();
}

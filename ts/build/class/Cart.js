"use strict";
var Cart = /** @class */ (function () {
    function Cart() {
        var cart = sessionStorage.getItem("cart");
        this._jsonCart = {};
        this._quantityProducts = 0;
        if (!cart)
            sessionStorage.setItem("cart", "{}");
        else {
            this._jsonCart = JSON.parse(cart);
            for (var _i = 0, _a = Object.keys(this._jsonCart); _i < _a.length; _i++) {
                var productIndex = _a[_i];
                this._quantityProducts += this._jsonCart[productIndex].units;
            }
        }
        ;
    }
    Cart.prototype.addToCart = function (product) {
        if (typeof product !== "string") {
            if (!this._jsonCart[product.title]) {
                this._jsonCart[product.title] = {
                    id: product.id,
                    price: product.body.length * 20,
                    total: product.body.length * 20,
                    units: 1
                };
            }
            else {
                this._jsonCart[product.title].units += 1;
                this._jsonCart[product.title].total += product.body.length * 20;
            }
            ;
            this._quantityProducts += 1;
            sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
        }
    };
    Cart.prototype.removeFromCart = function (concept) {
        if (this._jsonCart[concept].units === 1)
            delete this._jsonCart[concept];
        else {
            this._jsonCart[concept].units -= 1;
            this._jsonCart[concept].total -= this._jsonCart[concept].price;
        }
        this._quantityProducts -= 1;
        sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
    };
    Cart.prototype.lastMomentAppendToCart = function (concept) {
        this._jsonCart[concept].units += 1;
        this._jsonCart[concept].total += this._jsonCart[concept].price;
        this._quantityProducts += 1;
        sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
    };
    Cart.prototype.close = function () {
        sessionStorage.removeItem("cart");
        this._jsonCart = {};
        this._quantityProducts = 0;
        alert("Imagina que la compra finalizó");
    };
    Cart.prototype.getProducts = function () { return this._jsonCart; };
    Cart.prototype.getQuantityProducts = function () { return this._quantityProducts; };
    return Cart;
}());

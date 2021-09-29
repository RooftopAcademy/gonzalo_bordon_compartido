"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var Cart = /** @class */ (function () {
    function Cart() {
        if (!sessionStorage.getItem(config_1.SS_CART))
            sessionStorage.setItem(config_1.SS_CART, JSON.stringify({
                products: {},
                quantityProducts: 0
            }));
    }
    Cart.prototype.addToCart = function (product) {
        var _a = this.getCart(), products = _a.products, quantityProducts = _a.quantityProducts;
        if (!products[product.title]) {
            products[product.title] = {
                id: product.id,
                price: product.body.length * 20,
                total: product.body.length * 20,
                units: 1
            };
        }
        else {
            products[product.title].units += 1;
            products[product.title].total += product.body.length * 20;
        }
        ;
        sessionStorage.setItem(config_1.SS_CART, JSON.stringify({
            products: products,
            quantityProducts: quantityProducts + 1
        }));
    };
    Cart.prototype.removeFromCart = function (concept) {
        var _a = this.getCart(), products = _a.products, quantityProducts = _a.quantityProducts;
        if (products[concept].units === 1)
            delete products[concept];
        else {
            products[concept].units -= 1;
            products[concept].total -= products[concept].price;
        }
        sessionStorage.setItem(config_1.SS_CART, JSON.stringify({
            products: products,
            quantityProducts: quantityProducts - 1
        }));
    };
    Cart.prototype.lastMomentAppendToCart = function (concept) {
        var _a = this.getCart(), products = _a.products, quantityProducts = _a.quantityProducts;
        products[concept].units += 1;
        products[concept].total += products[concept].price;
        sessionStorage.setItem(config_1.SS_CART, JSON.stringify({
            products: products,
            quantityProducts: quantityProducts + 1
        }));
    };
    Cart.prototype.close = function () {
        sessionStorage.removeItem(config_1.SS_CART);
        alert("Imagina que la compra finalizó");
    };
    Cart.prototype.getCart = function () {
        return JSON.parse(sessionStorage.getItem(config_1.SS_CART));
    };
    Cart.prototype.getProducts = function () {
        return this.getCart().products;
    };
    Cart.prototype.getQuantityProducts = function () {
        return this.getCart().quantityProducts;
    };
    return Cart;
}());
exports.default = Cart;

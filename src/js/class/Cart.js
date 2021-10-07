"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var cartErrorHandler_1 = __importDefault(require("../errors/cartErrorHandler"));
var Cart = /** @class */ (function () {
    function Cart() {
        !sessionStorage.getItem(config_1.SS_CART)
            && sessionStorage.setItem(config_1.SS_CART, JSON.stringify({
                products: {},
                quantityProducts: 0,
                total: 0
            }));
    }
    Cart.prototype.addToCart = function (product) {
        var _a = this.getCart(), products = _a.products, quantityProducts = _a.quantityProducts, total = _a.total;
        if (!products[product.id]) {
            products[product.id] = {
                id: product.id,
                title: product.title,
                price: product.body.length * 20,
                total: product.body.length * 20,
                units: 1
            };
        }
        else {
            products[product.id].units += 1;
            products[product.id].total += product.body.length * 20;
        }
        ;
        sessionStorage.setItem(config_1.SS_CART, JSON.stringify({
            products: products,
            quantityProducts: quantityProducts + 1,
            total: total + products[product.id].price
        }));
    };
    Cart.prototype.removeFromCart = function (id) {
        var _a = this.getCart(), products = _a.products, quantityProducts = _a.quantityProducts, total = _a.total;
        var price = products[id].price;
        if (products[id].units === 1)
            delete products[id];
        else {
            products[id].units -= 1;
            products[id].total -= price;
        }
        sessionStorage.setItem(config_1.SS_CART, JSON.stringify({
            products: products,
            quantityProducts: quantityProducts - 1,
            total: total - price
        }));
    };
    Cart.prototype.lastMomentAppendToCart = function (id) {
        var _a = this.getCart(), products = _a.products, quantityProducts = _a.quantityProducts, total = _a.total;
        products[id].units += 1;
        products[id].total += products[id].price;
        sessionStorage.setItem(config_1.SS_CART, JSON.stringify({
            products: products,
            quantityProducts: quantityProducts + 1,
            total: total + products[id].price
        }));
    };
    Cart.prototype.close = function () {
        sessionStorage.removeItem(config_1.SS_CART);
        alert("Imagina que la compra finalizó");
    };
    Cart.prototype.getCart = function () {
        return JSON.parse(sessionStorage.getItem(config_1.SS_CART));
    };
    /**
     * @return if the Cart is empty or not.
     */
    Cart.prototype.isEmpty = function () {
        var cartResponse = this.getProducts();
        return (Object.values(cartResponse).length === 0);
    };
    /**
     * @return if the Cart is empty or not.
     */
    Cart.prototype.isCartError = function () {
        if (this.isEmpty()) {
            (0, cartErrorHandler_1.default)("El carrito está vacio.");
            return true;
        }
        return false;
    };
    /**
     * @return the products on cart.
     */
    Cart.prototype.getProducts = function () {
        var _a;
        return ((_a = this.getCart()) === null || _a === void 0 ? void 0 : _a.products) || {};
    };
    Cart.prototype.getQuantityProducts = function () {
        var _a;
        return ((_a = this.getCart()) === null || _a === void 0 ? void 0 : _a.quantityProducts) || 0;
    };
    Cart.prototype.getTotalPrice = function () {
        var _a;
        return ((_a = this.getCart()) === null || _a === void 0 ? void 0 : _a.total) || 0;
    };
    return Cart;
}());
exports.default = Cart;

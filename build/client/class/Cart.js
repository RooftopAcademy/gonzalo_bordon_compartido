"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Storage_1 = __importDefault(require("./Storage"));
var config_1 = require("../config");
var cartErrorHandler_1 = __importDefault(require("../errors/cartErrorHandler"));
var Cart = /** @class */ (function (_super) {
    __extends(Cart, _super);
    function Cart() {
        var _this = _super.call(this, config_1.SS_CART, {
            products: {},
            quantityProducts: 0,
        }) || this;
        _this.products = [];
        return _this;
    }
    Cart.prototype.addToCart = function (id) {
        var _a = this.getStorage(), products = _a.products, quantityProducts = _a.quantityProducts;
        if (!products[id]) {
            products[id] = 0;
        }
        products[id] += 1;
        this.updateStorage({
            products: products,
            quantityProducts: quantityProducts + 1,
        });
    };
    Cart.prototype.removeFromCart = function (id) {
        var _a = this.getStorage(), products = _a.products, quantityProducts = _a.quantityProducts;
        if (products[id] === 1)
            delete products[id];
        else
            products[id] -= 1;
        this.updateStorage({
            products: products,
            quantityProducts: quantityProducts - 1,
        });
    };
    Cart.prototype.close = function () {
        this.deleteStorage();
        alert("Imagina que la compra finalizó");
    };
    /**
     * @return if the Cart is empty or not.
     */
    Cart.prototype.isEmpty = function () {
        return this.getProducts().length === 0;
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
     * @return the ID's of the products on cart.
     */
    Cart.prototype.getProductsIDs = function () {
        var _a;
        return ((_a = this.getStorage()) === null || _a === void 0 ? void 0 : _a.products) || {};
    };
    /**
     * @return the ID's of the products on cart.
     */
    Cart.prototype.setProducts = function (products) {
        this.products = products;
    };
    /**
     * @return the products on cart.
     */
    Cart.prototype.getProducts = function () {
        return this.products;
    };
    Cart.prototype.getQuantityProducts = function () {
        var _a;
        return ((_a = this.getStorage()) === null || _a === void 0 ? void 0 : _a.quantityProducts) || 0;
    };
    return Cart;
}(Storage_1.default));
exports.default = Cart;

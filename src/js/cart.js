"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeCart = exports.loadTable = void 0;
var UI_1 = __importDefault(require("./class/UI"));
var config_1 = require("./config");
var script_1 = require("./script");
//  HTML
var CART_CONTAINER = document.getElementById("tBody");
var CART_TOTAL = document.getElementById("total");
var CART_ERROR_MESSAGE = document.getElementById("cartErrorMessage");
var REMOVE_ONE_PRODUCT_BUTTON = document.getElementsByClassName("reduceOneButton");
var ADD_ONE_PRODUCT_BUTTON = document.getElementsByClassName("increaseOneButton");
//  EVENT
var REMOVE_ONE_PRODUCT_BUTTON_EVENT = "click";
var ADD_ONE_PRODUCT_BUTTON_EVENT = "click";
function loadTable() {
    var products = config_1.CART.getProducts();
    var responseToCart = UI_1.default.appendOnCart(products);
    if (responseToCart.error)
        CART_ERROR_MESSAGE.innerHTML = responseToCart.error;
    else {
        CART_CONTAINER.innerHTML = responseToCart.body;
        CART_TOTAL.innerHTML = responseToCart.extra;
        for (var _i = 0, _a = Array.from(REMOVE_ONE_PRODUCT_BUTTON); _i < _a.length; _i++) {
            var reduceOneButton = _a[_i];
            reduceOneButton.addEventListener(REMOVE_ONE_PRODUCT_BUTTON_EVENT, function (e) {
                if (e.target instanceof HTMLElement) {
                    config_1.CART.removeFromCart(e.target.parentElement.nextElementSibling.innerHTML);
                    loadTable();
                }
            });
        }
        for (var _b = 0, _c = Array.from(ADD_ONE_PRODUCT_BUTTON); _b < _c.length; _b++) {
            var increaseOneButton = _c[_b];
            increaseOneButton.addEventListener(ADD_ONE_PRODUCT_BUTTON_EVENT, function (e) {
                if (e.target instanceof HTMLElement) {
                    config_1.CART.lastMomentAppendToCart(e.target.parentElement.nextElementSibling.innerHTML);
                    loadTable();
                }
            });
        }
    }
    ;
    (0, script_1.updateQuantityProducts)(String(config_1.CART.getQuantityProducts()));
}
exports.loadTable = loadTable;
function closeCart() {
    config_1.CART.close();
    loadTable();
}
exports.closeCart = closeCart;

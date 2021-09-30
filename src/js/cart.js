"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeCart = exports.loadTable = void 0;
var UI_1 = __importDefault(require("./class/UI"));
var config_1 = require("./config");
var script_1 = require("./script");
var listeners_1 = require("./listeners");
//  HTML
var CART_CONTAINER = document.getElementById("tBody");
var CART_TOTAL = document.getElementById("total");
var CART_ERROR_MESSAGE = document.getElementById("cartErrorMessage");
function loadTable() {
    var products = config_1.CART.getProducts();
    var responseToCart = UI_1.default.appendOnCart(products);
    if (responseToCart.error)
        CART_ERROR_MESSAGE.innerHTML = responseToCart.error;
    else {
        CART_CONTAINER.innerHTML = responseToCart.body;
        CART_TOTAL.innerHTML = responseToCart.extra;
        (0, listeners_1.listenToReduceIncreaseButtons)(loadTable);
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

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loadTable_1 = __importDefault(require("../scripts/loadTable"));
var CLOSE_CART_EVENT = "click";
var CLOSE_CART_ID = "js-closeCart";
/**
 * Close the Cart.
 */
function closeCartListener(cart) {
    var CLOSE_CART = document.getElementById(CLOSE_CART_ID);
    CLOSE_CART.addEventListener(CLOSE_CART_EVENT, function () {
        cart.close();
        (0, loadTable_1.default)();
    });
}
exports.default = closeCartListener;

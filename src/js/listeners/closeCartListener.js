"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __importDefault(require("../main"));
var loadTable_1 = __importDefault(require("../scripts/loadTable"));
/**
 * Close the Cart.
 */
function closeCartListener() {
    var CLOSE_CART = document.getElementById("js-closeCart");
    CLOSE_CART.addEventListener("click", function () {
        main_1.default.cart.close();
        (0, loadTable_1.default)();
    });
}
exports.default = closeCartListener;

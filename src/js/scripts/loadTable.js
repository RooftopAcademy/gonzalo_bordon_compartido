"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//  LISTENERS
var lastMomentShopListener_1 = __importDefault(require("../listeners/lastMomentShopListener"));
//  SCRIPTS
var main_1 = __importDefault(require("../main"));
var CartTableComponent_1 = __importDefault(require("../components/CartTableComponent"));
var updateQuantityProducts_1 = __importDefault(require("./updateQuantityProducts"));
//  HTML;
var tBodyCartID = "tBodyCart";
var totalCartID = "totalCart";
function setCartElements(tBodyCart, total) {
    document.getElementById(tBodyCartID).innerHTML = tBodyCart;
    document.getElementById(totalCartID).innerHTML = "$" + total;
}
/**
 * Loads the Table Body of the Cart View
 */
function loadTable(cart) {
    if (cart === void 0) { cart = main_1.default.cart; }
    cart.isCartError();
    var products = cart.getProducts();
    var totalPrice = cart.getTotalPrice();
    setCartElements((0, CartTableComponent_1.default)(products), String(totalPrice));
    (0, lastMomentShopListener_1.default)(loadTable);
    (0, updateQuantityProducts_1.default)(String(cart.getQuantityProducts()));
}
exports.default = loadTable;

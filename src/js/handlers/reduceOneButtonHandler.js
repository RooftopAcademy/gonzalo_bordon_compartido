"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __importDefault(require("../main"));
var getIdProductFromTable_1 = __importDefault(require("../scripts/getIdProductFromTable"));
var REMOVE_ONE_PRODUCT_BUTTON_EVENT = "click";
function reduceOneButtonHandler(button, callback) {
    button.addEventListener(REMOVE_ONE_PRODUCT_BUTTON_EVENT, function (e) {
        var ID = (0, getIdProductFromTable_1.default)(e);
        main_1.default.cart.removeFromCart(ID);
        callback();
    });
}
exports.default = reduceOneButtonHandler;

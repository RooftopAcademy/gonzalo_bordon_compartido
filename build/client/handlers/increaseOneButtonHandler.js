"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getIdProductFromTable_1 = __importDefault(require("../scripts/getIdProductFromTable"));
var ADD_ONE_PRODUCT_BUTTON_EVENT = "click";
function increaseOneButtonHandler(button, cart, callback) {
    button.addEventListener(ADD_ONE_PRODUCT_BUTTON_EVENT, function (e) {
        var ID = (0, getIdProductFromTable_1.default)(e);
        cart.addToCart(ID);
        callback();
    });
}
exports.default = increaseOneButtonHandler;

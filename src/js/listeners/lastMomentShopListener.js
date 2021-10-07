"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var increaseOneButtonHandler_1 = __importDefault(require("../handlers/increaseOneButtonHandler"));
var reduceOneButtonHandler_1 = __importDefault(require("../handlers/reduceOneButtonHandler"));
//  HTML
var REMOVE_ONE_PRODUCT_BUTTON = document.getElementsByClassName("reduceOneButton");
var ADD_ONE_PRODUCT_BUTTON = document.getElementsByClassName("increaseOneButton");
function lastMomentShopListener(callback) {
    Array.from(REMOVE_ONE_PRODUCT_BUTTON).forEach(function (reduceOneButton) {
        (0, reduceOneButtonHandler_1.default)(reduceOneButton, callback);
    });
    Array.from(ADD_ONE_PRODUCT_BUTTON).forEach(function (increaseOneButton) {
        (0, increaseOneButtonHandler_1.default)(increaseOneButton, callback);
    });
}
exports.default = lastMomentShopListener;

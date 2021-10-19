"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CartEntryComponent_1 = __importDefault(require("./CartEntryComponent"));
function CartTableComponent(products) {
    return Object.values(products)
        .map(function (product) { return (0, CartEntryComponent_1.default)(product); })
        .join("");
}
exports.default = CartTableComponent;

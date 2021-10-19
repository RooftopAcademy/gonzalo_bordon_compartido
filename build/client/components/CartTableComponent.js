"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CartEntryComponent_1 = __importDefault(require("./CartEntryComponent"));
function CartTableComponent(products) {
    var total = 0;
    var CartTable = Object.values(products)
        .map(function (product) {
        total += product.total;
        return (0, CartEntryComponent_1.default)(product);
    })
        .join("");
    return { CartTable: CartTable, total: total };
}
exports.default = CartTableComponent;

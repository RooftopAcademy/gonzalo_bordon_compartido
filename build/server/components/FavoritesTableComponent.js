"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FavoritesEntryComponent_1 = __importDefault(require("./FavoritesEntryComponent"));
function FavoritesTableComponent(products) {
    return products
        .map(function (product) { return (0, FavoritesEntryComponent_1.default)(product); })
        .join("");
}
exports.default = FavoritesTableComponent;

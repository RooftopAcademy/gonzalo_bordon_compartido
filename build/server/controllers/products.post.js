"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProductsAPI_1 = __importDefault(require("../classes/ProductsAPI"));
module.exports = function productsPost(req, res) {
    var response = new ProductsAPI_1.default(req).getProducts();
    res.json(response);
};

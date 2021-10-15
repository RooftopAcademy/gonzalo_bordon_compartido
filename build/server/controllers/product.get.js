"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProductsAPI_1 = __importDefault(require("../classes/ProductsAPI"));
var ProductSpecsComponent_1 = __importDefault(require("../components/ProductSpecsComponent"));
module.exports = function productGet(req, res) {
    var product = new ProductsAPI_1.default(req).getProduct();
    var config = product;
    config.productSpecs = (0, ProductSpecsComponent_1.default)(product.caracts);
    config.isFavorite = true;
    res.render("product", config);
};

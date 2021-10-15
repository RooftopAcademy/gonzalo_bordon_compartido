"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __importDefault(require("../classes/API"));
var ProductSpecsComponent_1 = __importDefault(require("../components/ProductSpecsComponent"));
module.exports = function productController(req, res) {
    var product = API_1.default.getProduct(+req.params.id);
    var config = product;
    config.productSpecs = (0, ProductSpecsComponent_1.default)(product.caracts);
    config.isFavorite = true;
    res.render("product", config);
};

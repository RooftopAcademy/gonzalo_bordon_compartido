"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProductsAPI_1 = __importDefault(require("../classes/ProductsAPI"));
var ProductsCardComponent_1 = __importDefault(require("../components/ProductsCardComponent"));
var PaginatorComponent_1 = __importDefault(require("../components/PaginatorComponent"));
module.exports = function productsController(req, res) {
    var _a = new ProductsAPI_1.default(req).getProducts(), products = _a.products, page = _a.page, maxPage = _a.maxPage;
    var productsHTML = products
        .map(function (product) { return (0, ProductsCardComponent_1.default)(product, true); })
        .join("");
    var paginatorHTML = (0, PaginatorComponent_1.default)(page, maxPage);
    res.render("products", {
        productsHTML: productsHTML,
        paginatorHTML: paginatorHTML,
    });
};

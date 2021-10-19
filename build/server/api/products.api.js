"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __importDefault(require("../classes/API"));
function productsApi(_a, body) {
    var page = _a.page, search = _a.search, min = _a.min, max = _a.max;
    if (body === void 0) { body = {}; }
    var products = API_1.default.getProducts(search, body.IDList, min, max);
    if (body) {
        return { products: products };
    }
    var maxPage = Math.ceil(products.length / 10);
    var currentPage = +page || 1;
    var firstProductIndex = (currentPage - 1) * 10;
    return {
        products: products.slice(firstProductIndex, firstProductIndex + 10),
        maxPage: maxPage,
        page: currentPage,
    };
}
exports.default = productsApi;

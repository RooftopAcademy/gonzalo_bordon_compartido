"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __importDefault(require("./API"));
var ProductsAPI = /** @class */ (function (_super) {
    __extends(ProductsAPI, _super);
    function ProductsAPI(req) {
        var _this = _super.call(this) || this;
        _this.params = {};
        _this.body = {};
        _this.params = req.params;
        _this.body = req.body;
        return _this;
    }
    ProductsAPI.prototype.getProducts = function () {
        var _a = this.params, page = _a.page, search = _a.search, min = _a.min, max = _a.max;
        var products = API_1.default.getProducts(search, min, max);
        var maxPage = Math.ceil(products.length / 10);
        var currentPage = +page || 1;
        var firstProductIndex = (currentPage - 1) * 10;
        return {
            products: products.slice(firstProductIndex, firstProductIndex + 10),
            maxPage: maxPage,
            page: currentPage,
        };
    };
    ProductsAPI.prototype.getProductsById = function () {
        return API_1.default.getProductsByIds(this.body.IDList);
    };
    return ProductsAPI;
}(API_1.default));
exports.default = ProductsAPI;

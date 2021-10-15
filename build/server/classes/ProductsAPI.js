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
var DataBase_1 = __importDefault(require("./DataBase"));
var ProductsAPI = /** @class */ (function (_super) {
    __extends(ProductsAPI, _super);
    function ProductsAPI(req) {
        var _this = _super.call(this, "products") || this;
        _this.params = {};
        _this.body = {};
        _this.params = req.params;
        _this.body = req.body;
        _this.products = _this.getTable();
        return _this;
    }
    ProductsAPI.prototype.getProducts = function () {
        var _this = this;
        var _a = this.params, page = _a.page, min = _a.min, max = _a.max;
        var search = this.body.search;
        var SEARCH_REGEX = new RegExp(search);
        var products = this.products.filter(function (product) {
            return SEARCH_REGEX.test(product.title.toLowerCase()) &&
                _this.inRange(product.price, min, max);
        });
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
        var _this = this;
        return this.products.filter(function (product) {
            return _this.body.IDList.includes(String(product.id));
        });
    };
    ProductsAPI.prototype.getProduct = function () {
        var id = this.params.id;
        return this.products.find(function (product) { return product.id === id; });
    };
    return ProductsAPI;
}(DataBase_1.default));
exports.default = ProductsAPI;

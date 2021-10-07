"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//  COMPONENETS
var ProductsCardComponent_1 = __importDefault(require("../components/ProductsCardComponent"));
var ProductSpecComponent_1 = __importDefault(require("../components/ProductSpecComponent"));
var PaginatorComponent_1 = __importDefault(require("../components/PaginatorComponent"));
//  VIEWS
var cartView_1 = __importDefault(require("../views/cartView"));
var errorView_1 = __importDefault(require("../views/errorView"));
var indexView_1 = __importDefault(require("../views/indexView"));
var productsView_1 = __importDefault(require("../views/productsView"));
var productView_1 = __importDefault(require("../views/productView"));
var UI = /** @class */ (function () {
    /**
     * @param document where the HTMLElement will be inserted.
     */
    function UI(document) {
        this.document = document;
    }
    /**
     * Render ProductView
     * @param product wehre the HTMLElement will be inserted.
     */
    UI.prototype.product = function (product) {
        var productSpecs = "";
        Object.keys(product.caracts).forEach(function (key) {
            productSpecs += (0, ProductSpecComponent_1.default)(key, product.caracts[key]);
        });
        this.document.innerHTML = (0, productView_1.default)(product, productSpecs);
    };
    /**
     * Render IndexView
     */
    UI.prototype.index = function () {
        this.document.innerHTML = (0, indexView_1.default)();
    };
    /**
     * Render ProductsView
     */
    UI.prototype.products = function (products, page, maxPage) {
        var innerHTML = "";
        products.forEach(function (product) {
            innerHTML += (0, ProductsCardComponent_1.default)(product);
        });
        this.document.innerHTML = (0, productsView_1.default)(innerHTML, this.paginator(page || 1, maxPage));
    };
    /**
     * Render CartView
     */
    UI.prototype.cart = function () {
        this.document.innerHTML = (0, cartView_1.default)();
    };
    /**
     * Render ErrorView
     */
    UI.prototype.error = function () {
        this.document.innerHTML = (0, errorView_1.default)();
    };
    /**
     * Render Paginator
     */
    UI.prototype.paginator = function (page, maxPage) {
        var left = page - 1;
        var center = page;
        var right = page + 1;
        if (page === 1) {
            ++left;
            ++center;
            ++right;
        }
        else if (page === maxPage) {
            --left;
            --center;
            --right;
        }
        return (0, PaginatorComponent_1.default)(page, maxPage, { left: left, center: center, right: right });
    };
    return UI;
}());
exports.default = UI;

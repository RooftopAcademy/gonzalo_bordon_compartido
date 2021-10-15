"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//  COMPONENETS
var ProductsCardComponent_1 = __importDefault(require("../../server/components/ProductsCardComponent"));
var PaginatorComponent_1 = __importDefault(require("../../server/components/PaginatorComponent"));
var UI = /** @class */ (function () {
    /**
     * @param document where the HTMLElement will be inserted.
     */
    function UI(document) {
        this.document = document;
    }
    /**
     * Render ProductsView
     */
    UI.prototype.products = function (favorites, products, page, maxPage) {
        var innerHTML = products
            .map(function (product) {
            return (0, ProductsCardComponent_1.default)(product, favorites.isFavorite(product.id));
        })
            .join("");
        (0, PaginatorComponent_1.default)(page || 1, maxPage);
    };
    return UI;
}());
exports.default = UI;

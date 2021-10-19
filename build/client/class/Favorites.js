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
var Storage_1 = __importDefault(require("./Storage"));
var config_1 = require("../config");
var Favorites = /** @class */ (function (_super) {
    __extends(Favorites, _super);
    function Favorites() {
        return _super.call(this, config_1.SS_FAVORITES, []) || this;
    }
    Favorites.prototype.addToFavorites = function (productID) {
        var favoritesArray = this.getStorage();
        favoritesArray.push(productID);
        this.updateStorage(favoritesArray);
    };
    Favorites.prototype.removeProduct = function (productID) {
        var favoritesArray = this.getStorage();
        this.updateStorage(favoritesArray.splice(favoritesArray.indexOf(productID), 1));
    };
    /**
     * @return if the Cart is empty or not.
     */
    Favorites.prototype.isEmpty = function () {
        var cartResponse = this.getStorage();
        return cartResponse.length === 0;
    };
    /**
     * @return favorites products.
     */
    Favorites.prototype.getFavorites = function () {
        return this.getStorage();
    };
    /**
     * @return favorites products.
     */
    Favorites.prototype.isFavorite = function (id) {
        return this.getStorage().includes(id);
        ;
    };
    return Favorites;
}(Storage_1.default));
exports.default = Favorites;

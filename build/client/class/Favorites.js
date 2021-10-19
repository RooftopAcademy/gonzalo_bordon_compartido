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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
        var favoritesSet = new Set(this.getStorage()).add(productID);
        this.updateFavorites(favoritesSet);
    };
    Favorites.prototype.removeFromFavorite = function (productID) {
        var favoritesSet = new Set(this.getStorage());
        favoritesSet.delete(productID);
        this.updateFavorites(favoritesSet);
    };
    Favorites.prototype.handleFavorite = function (productID) {
        var favoritesSet = new Set(this.getStorage());
        if (favoritesSet.has(productID)) {
            favoritesSet.delete(productID);
            return;
        }
        favoritesSet.add(productID);
    };
    /**
     * @return if the Cart is empty or not.
     */
    Favorites.prototype.isEmpty = function () {
        return this.getStorage().length === 0;
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
    /**
     * Update the Favorites Products Storage.
     */
    Favorites.prototype.updateFavorites = function (favoritesSet) {
        var favoritesArray = __spreadArray([], __read(favoritesSet), false);
        this.updateStorage(favoritesArray);
    };
    return Favorites;
}(Storage_1.default));
exports.default = Favorites;

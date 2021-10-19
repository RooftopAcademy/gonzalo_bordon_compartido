"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var DATABASE_DIR = require("../config").DATABASE_DIR;
var DATABASE_TABLE_PRODUCT = DATABASE_DIR + "/products.json";
var PRODUCTS = JSON.parse(fs.readFileSync(DATABASE_TABLE_PRODUCT, "utf8"));
var API = /** @class */ (function () {
    function API() {
    }
    API.getProduct = function (id) {
        return PRODUCTS.find(function (product) { return product.id === id; });
    };
    API.getProducts = function (search, min, max) {
        if (search === void 0) { search = ""; }
        if (min === void 0) { min = null; }
        if (max === void 0) { max = null; }
        var SEARCH_REGEX = new RegExp(search);
        return PRODUCTS.filter(function (product) {
            return SEARCH_REGEX.test(product.title.toLowerCase()) &&
                API.inRange(product.price, min, max);
        });
    };
    API.getProductsByIds = function (IDList) {
        if (IDList === void 0) { IDList = []; }
        return PRODUCTS.filter(function (product) {
            return IDList.includes(String(product.id));
        });
    };
    API.inRange = function (elem, min, max) {
        if (min === void 0) { min = null; }
        if (max === void 0) { max = null; }
        return (min ? elem >= min : true) && (max ? elem <= max : true);
    };
    return API;
}());
exports.default = API;

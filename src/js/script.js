"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateQuantityProducts = exports.setSearchURL = exports.getSearchURL = void 0;
var config_1 = require("./config");
//  HTML
var QUANTITY_PRODUCTS_INDICATOR = document.getElementById("quantityProducts");
//  URL
var URL_SEARCH = new URLSearchParams(document.location.search);
var PARAM_htmlFileName = URL_SEARCH.get("htmlFileName");
function getSearchURL() {
    var htmlFileName = config_1.DEFAULT_HTML_FILE;
    config_1.PAGES.forEach(function (page) { if (page === PARAM_htmlFileName) {
        htmlFileName = page;
    } });
    return {
        htmlFileName: htmlFileName,
        page: URL_SEARCH.get("page") || "",
        cod: URL_SEARCH.get("cod") || "",
        search: URL_SEARCH.get("search") || "",
    };
}
exports.getSearchURL = getSearchURL;
function setSearchURL(URL_SEARCH_PARAMS) {
    Object.keys(URL_SEARCH_PARAMS).forEach(function (key) { URL_SEARCH.set(key, URL_SEARCH_PARAMS[key]); });
    window.location.search = stringfyURLSearch();
}
exports.setSearchURL = setSearchURL;
function stringfyURLSearch() {
    var newSearch = "?";
    for (var _i = 0, _a = Array.from(URL_SEARCH.entries()); _i < _a.length; _i++) {
        var URL_PAIR = _a[_i];
        newSearch += URL_PAIR[0] + "=" + URL_PAIR[1] + "&";
    }
    return newSearch.slice(0, newSearch.length - 1);
}
function updateQuantityProducts(q) { QUANTITY_PRODUCTS_INDICATOR.innerHTML = q; }
exports.updateQuantityProducts = updateQuantityProducts;

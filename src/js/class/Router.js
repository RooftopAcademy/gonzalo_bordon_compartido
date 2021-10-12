"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  CONSTANTS
var config_1 = require("../config");
var Router = /** @class */ (function () {
    function Router() {
        this.URL_SEARCH = new URLSearchParams(document.location.search);
        this.HTML_FILE_NAME = this.fixFileName(this.URL_SEARCH.get("htmlFileName"));
        this.PAGE = this.URL_SEARCH.get("page");
        this.COD = this.URL_SEARCH.get("cod");
        this.SEARCH = this.URL_SEARCH.get("search");
    }
    /**
     * @returns the Search URL Param.
     */
    Router.prototype.getSearchURL = function () {
        return {
            htmlFileName: this.HTML_FILE_NAME,
            page: this.PAGE || "",
            cod: this.COD || "",
            search: this.SEARCH || "",
        };
    };
    /**
     * @returns the File Name if is an htmlFileName, otherwise, the Default HTML File.
     */
    Router.prototype.fixFileName = function (fileName) {
        return config_1.PAGES.includes(fileName) ? fileName : config_1.DEFAULT_HTML_FILE;
    };
    /**
     * Sets the Search URL Param.
     * @param urlParamsSetter the params and values to set in the Search URL Param.
     */
    Router.prototype.setSearchURL = function (urlParamsSetter) {
        var _this = this;
        Object.keys(urlParamsSetter).forEach(function (searchParam) {
            _this.URL_SEARCH.set(searchParam, urlParamsSetter[searchParam]);
        });
    };
    /**
     * Navigate to the Search URL Param Setted.
     * @returns void
     */
    Router.prototype.navigateSearchURL = function () {
        window.location.search = this.stringfyURLSearch();
    };
    /**
     * @returns the HTML File Name.
     */
    Router.prototype.getHTMLFileName = function () {
        return this.HTML_FILE_NAME;
    };
    /**
     * @returns the Search URL Param Setted stringe parsed.
     */
    Router.prototype.stringfyURLSearch = function () {
        var newSearch = "?";
        Array.from(this.URL_SEARCH.entries()).forEach(function (URL_PAIR) {
            newSearch += URL_PAIR[0] + "=" + URL_PAIR[1] + "&";
        });
        return newSearch.slice(0, newSearch.length - 1);
    };
    return Router;
}());
exports.default = Router;

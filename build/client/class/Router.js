"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.followWithParams = function (path, params) {
        window.location.replace(window.location.origin + path + Router.stringfyParams(params));
    };
    Router.followWithCurrentParams = function (path) {
        window.location.replace(window.location.origin + path + Router.getParams());
    };
    Router.getParams = function () {
        return window.location.search;
    };
    Router.createURL = function (path) {
        return window.location.origin + path;
    };
    Router.stringfyParams = function (params) {
        return ("?" +
            Object.keys(params)
                .map(function (key) { return key + "=" + params[key]; })
                .join("&"));
    };
    return Router;
}());
exports.default = Router;

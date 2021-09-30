"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchInputHandler = exports.searchButtonHandler = void 0;
var listeners_1 = require("./listeners");
var script_1 = require("./script");
function searchButtonHandler(e) {
    var BUTTON = e.target;
    sendSearchRequest(listeners_1.SEARCH_PAIR_INPUTS[BUTTON.id]);
}
exports.searchButtonHandler = searchButtonHandler;
function searchInputHandler(e) {
    if (e.keyCode === 13) {
        sendSearchRequest(e.target);
    }
}
exports.searchInputHandler = searchInputHandler;
function sendSearchRequest(input) {
    (0, script_1.setSearchURL)({
        "htmlFileName": "products",
        "search": input.value
    });
}

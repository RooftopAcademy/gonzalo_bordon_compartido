"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var searchButtonHandler_1 = __importDefault(require("../handlers/searchButtonHandler"));
var searchInputHandler_1 = __importDefault(require("../handlers/searchInputHandler"));
//  HTML
var SEARCH_BUTTON_S = document.getElementById("search-button-s");
var SEARCH_BUTTON = document.getElementById("search-button");
var SEARCH_INPUT_S = document.getElementById("search-input-s");
var SEARCH_INPUT = document.getElementById("search-input");
//  EVENTS
var SEARCH_BUTTON_S_EVENT = "click";
var SEARCH_BUTTON_EVENT = "click";
var SEARCH_INPUT_S_EVENT = "keyup";
var SEARCH_INPUT_EVENT = "keyup";
function searchsListener() {
    SEARCH_INPUT_S.addEventListener(SEARCH_INPUT_S_EVENT, searchInputHandler_1.default);
    SEARCH_INPUT.addEventListener(SEARCH_INPUT_EVENT, searchInputHandler_1.default);
    SEARCH_BUTTON_S.addEventListener(SEARCH_BUTTON_S_EVENT, searchButtonHandler_1.default);
    SEARCH_BUTTON.addEventListener(SEARCH_BUTTON_EVENT, searchButtonHandler_1.default);
}
exports.default = searchsListener;

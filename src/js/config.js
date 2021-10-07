"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SS_CART = exports.API_ERROR = exports.API_POSTS = exports.DEFAULT_HTML_FILE = exports.PAGES = exports.SEARCH_PAIR_INPUTS = exports.QUANTITY_PRODUCTS_INDICATOR = void 0;
//  HTML
var SEARCH_INPUT_S = document.getElementById("search-input-s");
var SEARCH_INPUT = document.getElementById("search-input");
var QUANTITY_PRODUCTS_INDICATOR = document.getElementById("quantityProducts");
exports.QUANTITY_PRODUCTS_INDICATOR = QUANTITY_PRODUCTS_INDICATOR;
//  GENERAL
var PAGES = ["index", "cart", "products", "product", "error"];
exports.PAGES = PAGES;
var DEFAULT_HTML_FILE = "index";
exports.DEFAULT_HTML_FILE = DEFAULT_HTML_FILE;
var SEARCH_PAIR_INPUTS = {
    "search-button-s": SEARCH_INPUT_S,
    "search-button": SEARCH_INPUT
};
exports.SEARCH_PAIR_INPUTS = SEARCH_PAIR_INPUTS;
//  API
var API_POSTS = "https://jsonplaceholder.typicode.com/posts/";
exports.API_POSTS = API_POSTS;
var API_ERROR = "ERROR";
exports.API_ERROR = API_ERROR;
//  SESSION_STORAGE
var SS_CART = "cart";
exports.SS_CART = SS_CART;

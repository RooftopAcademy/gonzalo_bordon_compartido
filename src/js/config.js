"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SS_CART = exports.API_ERROR = exports.API_POSTS = exports.HTML_PAGES_FUNCTIONS = exports.DEFAULT_HTML_FILE = exports.PAGES = exports.CART = void 0;
var Cart_1 = __importDefault(require("./class/Cart"));
var loadFiles_1 = require("./loadFiles");
//  CLASES
var CART = new Cart_1.default();
exports.CART = CART;
//  GENERAL
var PAGES = ["index", "cart", "products", "product"];
exports.PAGES = PAGES;
var DEFAULT_HTML_FILE = "index";
exports.DEFAULT_HTML_FILE = DEFAULT_HTML_FILE;
var HTML_PAGES_FUNCTIONS = {
    cart: loadFiles_1.cartFile,
    product: loadFiles_1.productFile,
    products: loadFiles_1.productsFile,
    index: loadFiles_1.indexFile,
};
exports.HTML_PAGES_FUNCTIONS = HTML_PAGES_FUNCTIONS;
//  API
var API_POSTS = "https://jsonplaceholder.typicode.com/posts/";
exports.API_POSTS = API_POSTS;
var API_ERROR = "ERROR";
exports.API_ERROR = API_ERROR;
//  SESSION_STORAGE
var SS_CART = "cart";
exports.SS_CART = SS_CART;

import { apiURL, apiError, htmlFileName, htmlFileLoaders } from "./interface";

import Cart from "./class/Cart";

import { cartFile, productFile, productsFile, indexFile } from "./loadFiles";


//  CLASES
const CART = new Cart();

//  GENERAL
const PAGES: htmlFileName[] = ["index", "cart", "products", "product"];
const DEFAULT_HTML_FILE: htmlFileName = "index";
const HTML_PAGES_FUNCTIONS: htmlFileLoaders = {
    cart: cartFile,
    product: productFile,
    products: productsFile,
    index: indexFile,
}

//  API
const API_POSTS: apiURL = "https://jsonplaceholder.typicode.com/posts/";
const API_ERROR: apiError = "ERROR";

//  SESSION_STORAGE
const SS_CART = "cart";

export {
    //CLASES
    CART,
    //GENERAL
    PAGES,
    DEFAULT_HTML_FILE,
    HTML_PAGES_FUNCTIONS,
    //API
    API_POSTS,
    API_ERROR,
    //SS
    SS_CART
}
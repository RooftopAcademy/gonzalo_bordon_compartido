import { apiError, apiURL } from "./types/api";
import { htmlFileName } from "./types/search";

import Router from "./class/Router";

//  HTML
const SEARCH_INPUT_S: HTMLElement = document.getElementById("search-input-s");
const SEARCH_INPUT: HTMLElement = document.getElementById("search-input");
const QUANTITY_PRODUCTS_INDICATOR: HTMLElement = document.getElementById("quantityProducts")

//  GENERAL
const CURRENT_PAGE: htmlFileName = Router.getPage();
const PAGES: htmlFileName[] = ["index", "cart", "products", "product", "error"];
const DEFAULT_HTML_FILE: htmlFileName = "index";
const SEARCH_PAIR_INPUTS: {
    [index: string]: HTMLElement
} = {
    "search-button-s": SEARCH_INPUT_S,
    "search-button": SEARCH_INPUT
}

//  API
const API_POSTS: apiURL = "https://jsonplaceholder.typicode.com/posts/";
const API_ERROR: apiError = "ERROR";

//  SESSION_STORAGE
const SS_CART: string = "cart";
const SS_FAVORITES: string = "favorites";

export {
    //HTML
    QUANTITY_PRODUCTS_INDICATOR,
    //GENERAL
    SEARCH_PAIR_INPUTS,
    PAGES,
    DEFAULT_HTML_FILE,
    CURRENT_PAGE,
    //API
    API_POSTS,
    API_ERROR,
    //SS
    SS_CART,
    SS_FAVORITES
}
import { searchData, htmlFileName, searchParam, searchDataToSet } from "./interface";

import { PAGES, DEFAULT_HTML_FILE } from "./config";

//  HTML
const QUANTITY_PRODUCTS_INDICATOR: HTMLElement = document.getElementById("quantityProducts");

//  URL
const URL_SEARCH: URLSearchParams = new URLSearchParams(document.location.search);
const PARAM_htmlFileName: string = URL_SEARCH.get("htmlFileName");

function getSearchURL(): searchData {
    let htmlFileName: htmlFileName = DEFAULT_HTML_FILE;
    
    PAGES.forEach((page: htmlFileName): void => { if (page === PARAM_htmlFileName) { htmlFileName = page }})

    return {
        htmlFileName,
        page: URL_SEARCH.get("page") || "",
        cod: URL_SEARCH.get("cod") || "",
        search: URL_SEARCH.get("search") || "",
    }
}

function setSearchURL(URL_SEARCH_PARAMS: searchDataToSet): void {
    Object.keys(URL_SEARCH_PARAMS).forEach((key: string): void => { URL_SEARCH.set(key, URL_SEARCH_PARAMS[(key as searchParam)]); })
    window.location.search = stringfyURLSearch();
}

function stringfyURLSearch() {
    let newSearch = "?";
    for(const URL_PAIR of Array.from(URL_SEARCH.entries())) { newSearch += `${URL_PAIR[0]}=${URL_PAIR[1]}&`; }

    return newSearch.slice(0,newSearch.length - 1)
}

function updateQuantityProducts(q: string): void { QUANTITY_PRODUCTS_INDICATOR.innerHTML = q; }

export {
    getSearchURL,
    setSearchURL,
    updateQuantityProducts
}
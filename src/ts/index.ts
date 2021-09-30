import { CART, HTML_PAGES_FUNCTIONS } from './config';
import "./searchProducts";

import { loadTable } from './cart';
import { getSearchURL, updateQuantityProducts } from "./script";
import { listenToMenuHandlerButtons, listenToPaginatorButtons, listenToSearchs, listenToShopButtons } from "./listeners";

const { htmlFileName } = getSearchURL();
const APP = document.getElementById("app");

window.onload = async function loadFile(): Promise<void> { 
    const innerHTML: string | void = await HTML_PAGES_FUNCTIONS[htmlFileName]();

    if (typeof innerHTML === "string") APP.innerHTML = innerHTML; 
    switch (htmlFileName) {
        case "cart":
            loadTable()
            break;
        case "products":
            listenToPaginatorButtons();
        case "product":
            listenToShopButtons();
        default:
            break;
    }

    updateQuantityProducts( String( CART.getQuantityProducts() ) );
    listenToMenuHandlerButtons();
    listenToSearchs();
};
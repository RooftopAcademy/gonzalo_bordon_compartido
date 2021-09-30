import { CART, HTML_PAGES_FUNCTIONS } from './config';

import { loadTable } from './cart';
import { getSearch, listenToMenuHandlerButtons, listenToShopButtons, updateQuantityProducts } from "./script";

const { htmlFileName } = getSearch();
const APP = document.getElementById("app");

window.onload = async function loadFile() : Promise<void> { 
    const innerHTML : string | void = await HTML_PAGES_FUNCTIONS[htmlFileName]();

    if (typeof innerHTML === "string") APP.innerHTML = innerHTML; 
    if (htmlFileName === "products" || htmlFileName === "product") listenToShopButtons();
    else if (htmlFileName === "cart") loadTable();

    updateQuantityProducts( String( CART.getQuantityProducts() ) );
    listenToMenuHandlerButtons();
};
import { searchData, responseProduct, htmlFileName, apiError } from "./interface";

import { getPost } from "./api";

import { PAGES, DEFAULT_HTML_FILE, CART } from "./config";

//  HTML
const MENU_HANDLERS_BUTTONS: HTMLCollectionOf<Element> = document.getElementsByClassName("openNav-button");
const MENU_CONTAINER: HTMLElement = document.getElementById("nav-container");
const QUANTITY_PRODUCTS_INDICATOR: HTMLElement = document.getElementById("quantityProducts");
const SHOP_BUTTONS: HTMLCollectionOf<Element> = document.getElementsByClassName("shopButton");

//  CSS CLASES
const MENU_CONTAINER_CLASS_SHOW = "active";

//  EVENTS
const SHOP_BUTTONS_EVENT = "click";
const MENU_HANDLERS_BUTTONS_EVENT = "click";

//  URL
const URL_SEARCH: URLSearchParams = new URLSearchParams(document.location.search.replace("?", ""));
const PARAM_htmlFileName: string = URL_SEARCH.get("htmlFileName");

function getSearch(): searchData {
    let htmlFileName: htmlFileName = DEFAULT_HTML_FILE;
    
    PAGES.forEach((page: htmlFileName): void => { if (page === PARAM_htmlFileName) { htmlFileName = page }})

    return {
        htmlFileName,
        page: URL_SEARCH.get("page") || "",
        cod: URL_SEARCH.get("cod") || ""
    }
}

function listenToShopButtons(): void { 
    Array.from(SHOP_BUTTONS).forEach((button: Element): void => { 
        button.addEventListener(SHOP_BUTTONS_EVENT, async (e: Event ): Promise<void> => {
            if (e.target instanceof HTMLElement) {
                const product: responseProduct | apiError = await getPost(e.target.dataset.cod);
                
                if (typeof product !== "string") {
                    CART.addToCart(product);
                    updateQuantityProducts( String( CART.getQuantityProducts() ) );
                } else {
                    alert("Ha ocurrido un error al añadir este producto al carrito");
                }
            }
        })
    });
}

function updateQuantityProducts(q: string): void { QUANTITY_PRODUCTS_INDICATOR.innerHTML = q; }

function listenToMenuHandlerButtons(): void {
    Array.from(MENU_HANDLERS_BUTTONS).forEach((button: Element) => {
        button.addEventListener(MENU_HANDLERS_BUTTONS_EVENT, (): void => {
            MENU_CONTAINER.classList.toggle(MENU_CONTAINER_CLASS_SHOW)
        })
    });
}

export {
    getSearch,
    listenToShopButtons,
    updateQuantityProducts,
    listenToMenuHandlerButtons
}
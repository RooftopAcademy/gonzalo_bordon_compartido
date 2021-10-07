import { responseProduct, apiError } from "./interface";

import { getPost } from "./api";
import { updateQuantityProducts } from "./script";

import { CART } from "./config";
import { searchButtonHandler, searchInputHandler } from "./searchProducts";
import { sendWithSearchParam } from "./products";


//  HTML
const MENU_HANDLERS_BUTTONS: HTMLCollectionOf<Element> = document.getElementsByClassName("openNav-button");
const REMOVE_ONE_PRODUCT_BUTTON: HTMLCollectionOf<Element> = document.getElementsByClassName("reduceOneButton");
const ADD_ONE_PRODUCT_BUTTON: HTMLCollectionOf<Element> = document.getElementsByClassName("increaseOneButton");
const SHOP_BUTTONS: HTMLCollectionOf<Element> = document.getElementsByClassName("shopButton");
const PAGINATOR_BUTTONS: HTMLCollectionOf<Element> = document.getElementsByClassName("js-paginator");
const MENU_CONTAINER: HTMLElement = document.getElementById("nav-container");
const SEARCH_BUTTON_S: HTMLElement = document.getElementById("search-button-s");
const SEARCH_BUTTON: HTMLElement = document.getElementById("search-button");
const SEARCH_INPUT_S: HTMLElement = document.getElementById("search-input-s");
const SEARCH_INPUT: HTMLElement = document.getElementById("search-input");


//  CSS CLASES
const MENU_CONTAINER_CLASS_SHOW: string = "active";


//  EVENTS
const MENU_HANDLERS_BUTTONS_EVENT: string = "click";
const SHOP_BUTTONS_EVENT: string = "click";
const SEARCH_BUTTON_S_EVENT: string = "click";
const SEARCH_BUTTON_EVENT: string = "click";
const SEARCH_INPUT_S_EVENT: string = "keyup";
const SEARCH_INPUT_EVENT: string = "keyup";
const REMOVE_ONE_PRODUCT_BUTTON_EVENT: string = "click";
const ADD_ONE_PRODUCT_BUTTON_EVENT: string = "click";
const PAGINATOR_BUTTONS_EVENT: string = "click";


//  GENERAL
const SEARCH_PAIR_INPUTS: {
    [index: string]: HTMLElement
} = {
    "search-button-s": SEARCH_INPUT_S,
    "search-button": SEARCH_INPUT
}

function listenToMenuHandlerButtons(): void {
    Array.from(MENU_HANDLERS_BUTTONS).forEach((button: Element) => {
        button.addEventListener(MENU_HANDLERS_BUTTONS_EVENT, (): void => {
            MENU_CONTAINER.classList.toggle(MENU_CONTAINER_CLASS_SHOW)
        })
    });
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

function listenToSearchs(): void {
    SEARCH_INPUT_S.addEventListener(SEARCH_INPUT_S_EVENT, searchInputHandler);
    SEARCH_INPUT.addEventListener(SEARCH_INPUT_EVENT, searchInputHandler);
    SEARCH_BUTTON_S.addEventListener(SEARCH_BUTTON_S_EVENT, searchButtonHandler);
    SEARCH_BUTTON.addEventListener(SEARCH_BUTTON_EVENT, searchButtonHandler);
}

function listenToPaginatorButtons(): void {
    Array.from(PAGINATOR_BUTTONS).forEach((button: Element): void => {
        (button as HTMLElement).addEventListener(PAGINATOR_BUTTONS_EVENT, sendWithSearchParam)
    })
}

function listenToReduceIncreaseButtons(callback: () => void): void {
    Array.from(REMOVE_ONE_PRODUCT_BUTTON).forEach(reduceOneButton => {
        reduceOneButton.addEventListener(REMOVE_ONE_PRODUCT_BUTTON_EVENT, (e: Event): void => {
            CART.removeFromCart((e.target as HTMLElement).parentElement.nextElementSibling.innerHTML);
            callback();
        })
    })
    Array.from(ADD_ONE_PRODUCT_BUTTON).forEach(increaseOneButton => {
        increaseOneButton.addEventListener(ADD_ONE_PRODUCT_BUTTON_EVENT, (e: Event): void => {
            CART.lastMomentAppendToCart((e.target as HTMLElement).parentElement.nextElementSibling.innerHTML);
            callback();
        })
    })
}

export {
    SEARCH_PAIR_INPUTS,
    listenToMenuHandlerButtons,
    listenToPaginatorButtons,
    listenToShopButtons,
    listenToSearchs,
    listenToReduceIncreaseButtons
}
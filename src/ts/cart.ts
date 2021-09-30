import { cartProducts, responseToCart } from "./interface";

import UI from "./class/UI";

import { CART } from "./config";

import { updateQuantityProducts } from "./script";

//  HTML
const CART_CONTAINER =  document.getElementById("tBody");
const CART_TOTAL = document.getElementById("total");
const CART_ERROR_MESSAGE = document.getElementById("cartErrorMessage");
const REMOVE_ONE_PRODUCT_BUTTON = document.getElementsByClassName("reduceOneButton");
const ADD_ONE_PRODUCT_BUTTON = document.getElementsByClassName("increaseOneButton");

//  EVENT
const REMOVE_ONE_PRODUCT_BUTTON_EVENT = "click";
const ADD_ONE_PRODUCT_BUTTON_EVENT = "click";

function loadTable(): void {
    const products: cartProducts = CART.getProducts();
    const responseToCart: responseToCart = UI.appendOnCart(products);

    if (responseToCart.error) CART_ERROR_MESSAGE.innerHTML = responseToCart.error;
    else {
        CART_CONTAINER.innerHTML = responseToCart.body;
        CART_TOTAL.innerHTML = responseToCart.extra;

        for (const reduceOneButton of Array.from(REMOVE_ONE_PRODUCT_BUTTON)) {
            reduceOneButton.addEventListener(REMOVE_ONE_PRODUCT_BUTTON_EVENT, (e: Event): void => {
                CART.removeFromCart((e.target as HTMLElement).parentElement.nextElementSibling.innerHTML);
                loadTable();
            })
        }
        for (const increaseOneButton of Array.from(ADD_ONE_PRODUCT_BUTTON)) {
            increaseOneButton.addEventListener(ADD_ONE_PRODUCT_BUTTON_EVENT, (e: Event): void => {
                CART.lastMomentAppendToCart((e.target as HTMLElement).parentElement.nextElementSibling.innerHTML);
                loadTable();
            })
        }
    };

    updateQuantityProducts( String( CART.getQuantityProducts() ) );
}

function closeCart(): void {
    CART.close();
    loadTable();
}

export {
    loadTable,
    closeCart
}
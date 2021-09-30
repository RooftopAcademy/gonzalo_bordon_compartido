import { cartProducts, responseToCart } from "./interface";

import UI from "./class/UI";

import { CART } from "./config";

import { updateQuantityProducts } from "./script";
import { listenToReduceIncreaseButtons } from "./listeners";

//  HTML
const CART_CONTAINER =  document.getElementById("tBody");
const CART_TOTAL = document.getElementById("total");
const CART_ERROR_MESSAGE = document.getElementById("cartErrorMessage");

function loadTable(): void {
    const products: cartProducts = CART.getProducts();
    const responseToCart: responseToCart = UI.appendOnCart(products);

    if (responseToCart.error) CART_ERROR_MESSAGE.innerHTML = responseToCart.error;
    else {
        CART_CONTAINER.innerHTML = responseToCart.body;
        CART_TOTAL.innerHTML = responseToCart.extra;

        listenToReduceIncreaseButtons(loadTable);
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
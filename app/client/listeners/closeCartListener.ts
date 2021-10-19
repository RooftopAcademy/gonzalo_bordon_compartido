import Cart from "../class/Cart";
import loadTable from "../scripts/loadTable";

const CLOSE_CART_EVENT: string = "click";
const CLOSE_CART_ID: string = "js-closeCart";

/**
 * Close the Cart.
 */
export default function closeCartListener(cart: Cart): void {
  const CLOSE_CART: HTMLElement = document.getElementById(CLOSE_CART_ID);
  CLOSE_CART.addEventListener(CLOSE_CART_EVENT, (): void => {
    cart.close();
    loadTable();
  });
}

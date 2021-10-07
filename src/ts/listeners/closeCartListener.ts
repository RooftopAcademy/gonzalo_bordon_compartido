import app from "../main";
import loadTable from "../scripts/loadTable";

/**
 * Close the Cart.
 */
export default function closeCartListener(
): void {
    const CLOSE_CART: HTMLElement = document.getElementById("js-closeCart");
    CLOSE_CART.addEventListener("click", (
    ): void => {
        app.cart.close();
        loadTable();
    })
}
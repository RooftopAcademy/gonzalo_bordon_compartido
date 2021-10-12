import app from "../main";
import getIdProductFromTable from "../scripts/getIdProductFromTable";

const REMOVE_ONE_PRODUCT_BUTTON_EVENT: string = "click";

export default function reduceOneButtonHandler(
    button: Element,
    callback: () => void
): void {
    button.addEventListener(
        REMOVE_ONE_PRODUCT_BUTTON_EVENT, 
        (
            e: Event
        ): void => {
            const ID: number = getIdProductFromTable(e);
            app.cart.removeFromCart( ID );
            callback();
        }
    )
}
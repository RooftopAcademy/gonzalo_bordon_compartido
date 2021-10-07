import app from "../main";
import getIdProductFromTable from "../scripts/getIdProductFromTable";

const ADD_ONE_PRODUCT_BUTTON_EVENT: string = "click";

export default function increaseOneButtonHandler(
    button: Element,
    callback: () => void
): void {
    button.addEventListener(
        ADD_ONE_PRODUCT_BUTTON_EVENT, 
        (
            e: Event
        ): void => {
            const ID: number = getIdProductFromTable(e);
            app.cart.lastMomentAppendToCart( ID );
            callback();
        }
    )
}
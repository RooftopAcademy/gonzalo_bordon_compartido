import increaseOneButtonHandler from "../handlers/increaseOneButtonHandler";
import reduceOneButtonHandler from "../handlers/reduceOneButtonHandler";

//  HTML
const REMOVE_ONE_PRODUCT_BUTTON: HTMLCollectionOf<Element> = document.getElementsByClassName("reduceOneButton");
const ADD_ONE_PRODUCT_BUTTON: HTMLCollectionOf<Element> = document.getElementsByClassName("increaseOneButton");

export default function lastMomentShopListener(
    callback: () => void
): void {
    Array.from(REMOVE_ONE_PRODUCT_BUTTON).forEach((
        reduceOneButton: Element
    ): void => {
        reduceOneButtonHandler(reduceOneButton, callback);
    })
    Array.from(ADD_ONE_PRODUCT_BUTTON).forEach((
        increaseOneButton: Element
    ): void => {
        increaseOneButtonHandler(increaseOneButton, callback);
    })
}


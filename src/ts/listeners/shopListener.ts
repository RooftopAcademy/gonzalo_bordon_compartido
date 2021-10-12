//  INTERFACES
import ApiProduct from "../interfaces/ApiProduct";

//  TYPES
import { apiError } from "../types/api";

//  CLASSES
import API from "../class/API";

//  SCRIPTS
import app from "../main";
import updateQuantityProducts from "../scripts/updateQuantityProducts";

//  HTML
const SHOP_BUTTONS: HTMLCollectionOf<Element> = document.getElementsByClassName("shopButton");

//  EVENTS
const SHOP_BUTTONS_EVENT: string = "click";

export default function shopListener(
): void { 
    Array.from(SHOP_BUTTONS).forEach((
        button: Element
    ): void => { 
        button.addEventListener(SHOP_BUTTONS_EVENT, async (
            e: Event 
        ): Promise<void> => {
            const id: string = (e.target as HTMLElement).dataset.cod;
            const product: ApiProduct | apiError = await API.getPost(id);

            if (!API.isApiError(product)) {
                app.cart.addToCart(product as ApiProduct);
                updateQuantityProducts( String( app.cart.getQuantityProducts() ) );
            }
        })
    });
}
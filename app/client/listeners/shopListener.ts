import Cart from "../class/Cart";

//  SCRIPTS
import updateQuantityProducts from "../scripts/updateQuantityProducts";

//  HTML
const SHOP_BUTTONS: HTMLCollectionOf<Element> =
  document.getElementsByClassName("shopButton");

//  EVENTS
const SHOP_BUTTONS_EVENT: string = "click";

export default function shopListener(cart: Cart): void {
  Array.from(SHOP_BUTTONS).forEach((button: Element): void => {
    button.addEventListener(
      SHOP_BUTTONS_EVENT,
      async (e: Event): Promise<void> => {
        const id: number = +(e.target as HTMLElement).dataset.id;
        cart.addToCart(id);
        updateQuantityProducts(cart.getQuantityProducts());
      }
    );
  });
}

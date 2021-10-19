//  LISTENERES
import menuHandlerListener from "../listeners/menuHandlerListener";
import closeCartListener from "../listeners/closeCartListener";
import paginatorListener from "../listeners/paginatorListener";
import searchsListener from "../listeners/searchsListener";
import shopListener from "../listeners/shopListener";

//  CLASSES
import Favorites from "./Favorites";
import Cart from "./Cart";
import UI from "./UI";

//  SCRIPTS
import updateQuantityProducts from "../scripts/updateQuantityProducts";
import loadTable from "../scripts/loadTable";
import { CURRENT_PAGE } from "../config";

export default class App {
  public ui: UI;
  public cart: Cart;
  public favorites: Favorites;
  private PREPARE: {
    [index: string]: string;
  } = {
    products: "productsPrepare",
    product: "productPrepare",
    cart: "cartPrepare",
  };

  constructor(HTML_APP: HTMLElement) {
    this.ui = new UI(HTML_APP);
    this.cart = new Cart();
    this.favorites = new Favorites();
  }

  /**
   * Loads and runs the needed listeners.
   */
  public fileLoader(): void {
    const preparative = this.PREPARE[CURRENT_PAGE];

    if (preparative) {
      (this as any)[preparative]();
    }

    updateQuantityProducts(this.cart.getQuantityProducts());
    menuHandlerListener();
    searchsListener();
  }

  /**
   * Loads all listeners for Products.
   */
  private productsPrepare(): void {
    paginatorListener();
    shopListener(this.cart);
  }

  /**
   * Loads all listeners for Product.
   */
  private productPrepare(): void {
    shopListener(this.cart);
  }

  /**
   * Loads all listeners for Cart.
   */
  private cartPrepare(): void {
    closeCartListener(this.cart);
    loadTable(this.cart);
  }
}

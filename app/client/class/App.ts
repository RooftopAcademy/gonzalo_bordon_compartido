//  LISTENERES
import loginRegisterListener from "../listeners/loginRegisterListener";
import usersLogoutListener from "../listeners/usersLogoutListener";
import menuHandlerListener from "../listeners/menuHandlerListener";
import closeCartListener from "../listeners/closeCartListener";
import favoritesAsyncListener from "../listeners/favoritesAsyncListener";
import paginatorListener from "../listeners/paginatorListener";
import searchsListener from "../listeners/searchsListener";
import shopListener from "../listeners/shopListener";

//  CLASSES
import Favorites from "./Favorites";
import Router from "./Router";
import Users from "./Users";
import Cart from "./Cart";

//  SCRIPTS
import updateQuantityProducts from "../scripts/updateQuantityProducts";
import loadUsers from "../scripts/loadUsers";
import loadTable from "../scripts/loadTable";
import { CURRENT_PAGE } from "../config";
import favoritesSyncListener from "../listeners/favoritesSyncListener";

export default class App {
  public cart: Cart;
  public users: Users;
  public favorites: Favorites;
  private PREPARE: {
    [index: string]: string;
  } = {
    products: "productsPrepare",
    product: "productPrepare",
    cart: "cartPrepare",
    users: "usersPrepare",
  };

  constructor(HTML_APP: HTMLElement) {
    this.cart = new Cart();
    this.users = new Users();
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
    this.productPrepare();
    paginatorListener();
  }

  /**
   * Loads all listeners for Product.
   */
  private productPrepare(): void {
    favoritesAsyncListener(this.users, this.favorites);
    shopListener(this.cart);
  }

  /**
   * Loads all listeners for Cart.
   */
  private cartPrepare(): void {
    closeCartListener(this.cart);
    loadTable(this.cart);
  }

  /**
   * Loads all listeners for Users.
   */
  private async usersPrepare(): Promise<void> {
    if (this.users.isLogued()) {
      if (!Router.getParam(1)) {
        return Router.follow(`/users/${this.users.getUser()}`);
      }
      await loadUsers(this.users, this.favorites);
      favoritesSyncListener(this.favorites);
      usersLogoutListener(this.users);
      return;
    }

    loginRegisterListener();
  }
}

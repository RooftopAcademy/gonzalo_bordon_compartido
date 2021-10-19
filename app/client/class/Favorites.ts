import { favoritesArray } from "../types/favorites";
import { productID } from "../types/products";

import Router from "./Router";
import API from "./API";

import UsersStorage from "./UsersStorage";

export default class Favorites extends UsersStorage {
  constructor() {
    super();
  }

  public async toggleFavorites(productID: productID): Promise<boolean> {
    return await API.fetchAPI(this.getFavoritesAPI(`${productID}`), {}, "PUT");
  }

  /**
   * @return favorites products.
   */
  public async getFavorites(): Promise<favoritesArray> {
    return (await API.fetchAPI(this.getFavoritesAPI())).favorites;
  }

  private getFavoritesAPI(productID: string = ""): string {
    return Router.createURL(`/favorites/${this.getUser()}/${productID}`);
  }
}

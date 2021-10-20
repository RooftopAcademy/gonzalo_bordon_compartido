import Product from "../interfaces/Product";

import { favoritesArray } from "../types/favorites";
import { productID } from "../types/products";

import UsersStorage from "./UsersStorage";
import Router from "./Router";
import API from "./API";


export default class Favorites extends UsersStorage {
  constructor() {
    super();
  }

  /**
   * @return true if the product was added or false if was removed from Favorites.
   */
  public async toggleFavorites(productID: productID): Promise<boolean> {
    return await API.fetchAPI(this.getFavoritesAPI(`${productID}`), {}, "PUT");
  }

  /**
   * @return favorites products IDs.
   */
  public async getFavoritesList(): Promise<favoritesArray> {
    return (await API.fetchAPI(this.getFavoritesAPI("id"))).favorites;
  }

  /**
   * @return favorites products.
   */
  public async getFavorites(): Promise<Product[]> {
      return (await API.fetchAPI(this.getFavoritesAPI())).favorites;
  }

  private getFavoritesAPI(query: string = ""): string {
    return Router.createURL(`/favorites/${this.getUser()}/${query}`);
  }
}

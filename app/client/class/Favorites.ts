import { favoritesArray } from "../types/favorites";
import { productID } from "../types/products";

import Storage from "./Storage";

import { SS_FAVORITES } from "../config";

export default class Favorites extends Storage<favoritesArray> {
  constructor() {
    super(SS_FAVORITES, []);
  }

  public addToFavorites(productID: productID): void {
    const favoritesSet: Set<number> = new Set(this.getStorage()).add(productID);
    this.updateFavorites(favoritesSet);
  }

  public removeFromFavorite(productID: number): void {
    const favoritesSet: Set<number> = new Set(this.getStorage())
    favoritesSet.delete(productID);
    this.updateFavorites(favoritesSet);
  }

  public handleFavorite(productID: number): void {
    const favoritesSet: Set<number> = new Set(this.getStorage());
    if (favoritesSet.has(productID)) {
      favoritesSet.delete(productID);
      return
    }
    favoritesSet.add(productID);
  }

  /**
   * @return if the Cart is empty or not.
   */
  public isEmpty(): boolean {
    return this.getStorage().length === 0;
  }

  /**
   * @return favorites products.
   */
  public getFavorites(): favoritesArray {
    return this.getStorage();
  }

  /**
   * @return favorites products.
   */
  public isFavorite(id: number): boolean {
    return this.getStorage().includes(id);;
  }

  /**
   * Update the Favorites Products Storage.
   */
  private updateFavorites(favoritesSet: Set<number>): void {
    const favoritesArray: favoritesArray = [...favoritesSet];
    this.updateStorage(favoritesArray);
  }
}

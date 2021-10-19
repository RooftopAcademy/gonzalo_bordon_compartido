import Favorites from "../interfaces/Favorites";

import { favoritesArray } from "../types/favorites";

import DataBase from "./DataBase";

export default class FavoritesAPI extends DataBase {
  private params: any = {};
  private favorites: Favorites[] = [];

  constructor(params: any) {
    super("favorites");
    this.params = params;
    this.favorites = this.getTable();
  }

  public toggleFavorites(): boolean {
    const { id } = this.params;
    const userFavorites: Favorites = this.returnFavorites();
    
    const favoritesSet: Set<number> = new Set(userFavorites.favoritesProducts);
    let state: boolean;

    if (favoritesSet.has(id)) {
      favoritesSet.delete(id);
      state = false;
    } else {
      favoritesSet.add(id);
      state = true;
    }

    userFavorites.favoritesProducts = Array.from(favoritesSet);
    this.setFavorites(userFavorites);
    return state;
  }

  public isFavorite(id: number): boolean {
    return this.getFavorites().includes(id);
  }

  public getFavorites(): favoritesArray {
    return this.returnFavorites().favoritesProducts;
  }

  private returnFavorites(): Favorites {
    const { userID } = this.params;
    return (
      this.favorites.find((userFavorites) => userFavorites.id === userID) || {
        id: userID,
        favoritesProducts: [],
      }
    );
  }

  private setFavorites(data: Favorites) {
    let noChange: boolean = true;

    const favorites: Favorites[] = this.favorites.map((userFavorites) => {
      if (userFavorites.id === data.id) {
        userFavorites = data;
        noChange = false;
      }
      return userFavorites;
    });

    if (noChange) {
      favorites.push(data);
    }

    this.setTable("favorites", favorites);
  }
}

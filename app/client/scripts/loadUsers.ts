import Product from "../interfaces/Product";

import Favorites from "../class/Favorites";
import Users from "../class/Users";

import FavoritesContainerComponent from "../components/FavoritesContainerComponent";
import FavoritesEmptyComponent from "../components/FavoritesEmptyComponent";

//  HTML;
const USER_EMAIL: HTMLElement = document.getElementById("user-email");
const FAVORITES_CONTAINER: HTMLElement = document.getElementById(
  "favorites-container"
);

/**
 * Loads the Table Body of the Cart View
 */
export default async function loadUsers(
  users: Users,
  favorites: Favorites
): Promise<void> {
  USER_EMAIL.innerHTML = users.getEmail();

  const products: Product[] = await favorites.getFavorites();
  
  const innerHTML: string = (products.length === 0) ? FavoritesEmptyComponent() : FavoritesContainerComponent(products);

  FAVORITES_CONTAINER.innerHTML = innerHTML;
}

import { favoritesArray } from "../types/favorites";

import Favorites from "../class/Favorites";
import Users from "../class/Users";

//  HTML;
const USER_EMAIL: HTMLElement = document.getElementById("user-email");

/**
 * Loads the Table Body of the Cart View
 */
export default async function loadUsers(users: Users, favorites: Favorites): Promise<void> {
  USER_EMAIL.innerHTML = users.getEmail();

  const favoritesArray: favoritesArray = await favorites.getFavorites();
  console.log(favoritesArray)
}

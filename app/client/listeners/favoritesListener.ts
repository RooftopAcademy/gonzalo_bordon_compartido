import Favorites from "../class/Favorites";
import Users from "../class/Users";

//  HTML
const FAVORITES_ICONS: HTMLCollectionOf<Element> =
  document.getElementsByClassName("favorites-icon");

//  EVENTS
const FAVORITES_ICON_EVENT: string = "click";

export default async function favoritesListener(
  users: Users,
  favorites: Favorites
): Promise<void> {
  const favoritesArray = await favorites.getFavorites();
  const isLogued: boolean = users.isLogued();

  Array.from(FAVORITES_ICONS).forEach((favorites_icon: Element): void => {
    const favoriteID: number = +(favorites_icon as HTMLElement).dataset.id;

    if (favoritesArray.includes(`${favoriteID}`)) {
      favorites_icon.classList.add("selected");
    }

    favorites_icon.addEventListener(FAVORITES_ICON_EVENT, () => {
      if (!isLogued) {
        return alert("Necesitas estar Logueado!");
      }
      const productID: number = +(favorites_icon as HTMLElement).dataset.id;
      favorites.toggleFavorites(`${productID}`);

      favorites_icon.classList.toggle("selected");
    });
  });
}
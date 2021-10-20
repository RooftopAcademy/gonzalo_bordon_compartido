import Favorites from "../class/Favorites";

//  HTML
const FAVORITES_ICONS: HTMLCollectionOf<Element> =
  document.getElementsByClassName("favorites-icon");

//  EVENTS
const FAVORITES_ICON_EVENT: string = "click";

export default function favoritesSyncListener(
  favorites: Favorites
): void {
  Array.from(FAVORITES_ICONS).forEach((favorites_icon: Element): void => {
    const favoriteID: number = +(favorites_icon as HTMLElement).dataset.id;

    favorites_icon.addEventListener(FAVORITES_ICON_EVENT, () => {
      const productID: number = +(favorites_icon as HTMLElement).dataset.id;
      favorites.toggleFavorites(`${productID}`);

      favorites_icon.classList.toggle("selected");
    });
  });
}

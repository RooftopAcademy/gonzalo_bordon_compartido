import app from "../main";

//  HTML
const FAVORITES_ICONS: HTMLCollectionOf<Element> =
  document.getElementsByClassName("favorites-icon");

//  EVENTS
const SEARCH_INPUT_S_EVENT: string = "keyup";

export default function favoritesListener(): void {
  Array.from(FAVORITES_ICONS).forEach((favorites_icon: Element): void => {
    favorites_icon.addEventListener(SEARCH_INPUT_S_EVENT, (e) => {
      if (!app.users.isLogued()) {
        return alert("Necesitas estar Logueado!");
      }
      const productID: number = +(favorites_icon as HTMLElement).dataset.id;
      app.favorites.handleFavorite(productID);
    });
  });
}

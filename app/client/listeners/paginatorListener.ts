import Router from "../class/Router";

//  HTML
const PAGINATOR_BUTTONS: HTMLCollectionOf<Element> =
  document.getElementsByClassName("js-paginator");

//  EVENTS
const PAGINATOR_BUTTONS_EVENT: string = "click";

export default function paginatorListener(): void {
  Array.from(PAGINATOR_BUTTONS).forEach((button: Element): void => {
    (button as HTMLElement).addEventListener(
      PAGINATOR_BUTTONS_EVENT,
      (e: Event): void => {
        const page: string = (e.target as HTMLElement).dataset.page;

        Router.followWithCurrentParams(`/products/${page}`);
      }
    );
  });
}

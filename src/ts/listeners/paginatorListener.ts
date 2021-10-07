import app from "../main";

//  HTML
const PAGINATOR_BUTTONS: HTMLCollectionOf<Element> = document.getElementsByClassName("js-paginator");

//  EVENTS
const PAGINATOR_BUTTONS_EVENT: string = "click";

export default function paginatorListener(
): void {
    Array.from(PAGINATOR_BUTTONS).forEach((button: Element): void => {
        (button as HTMLElement).addEventListener(PAGINATOR_BUTTONS_EVENT, sendWithSearchParam);
    })
}

function sendWithSearchParam(
    e: Event
    ): void {
    app.router.setSearchURL({
        "htmlFileName": "products",
        "page": (e.target as HTMLElement).dataset.page,
        "search": app.router.getSearchURL().search
    })
    app.router.navigateSearchURL();
}
import { SEARCH_PAIR_INPUTS } from "./listeners";
import { setSearchURL } from "./script";

function searchButtonHandler(e: Event): void {
    const BUTTON: HTMLElement = e.target as HTMLElement;
    sendSearchRequest(SEARCH_PAIR_INPUTS[BUTTON.id] as HTMLInputElement);
}

function searchInputHandler(e: Event): void {
    if ((e as KeyboardEvent).keyCode === 13) {
        sendSearchRequest(e.target as HTMLInputElement);
    }
}

function sendSearchRequest(input: HTMLInputElement) {
    setSearchURL({
        "htmlFileName": "products",
        "search": input.value
    })
}

export {
    searchButtonHandler,
    searchInputHandler
}
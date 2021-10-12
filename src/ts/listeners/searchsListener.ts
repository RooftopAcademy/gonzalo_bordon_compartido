import searchButtonHandler from "../handlers/searchButtonHandler";
import searchInputHandler from "../handlers/searchInputHandler";

//  HTML
const SEARCH_BUTTON_S: HTMLElement = document.getElementById("search-button-s");
const SEARCH_BUTTON: HTMLElement = document.getElementById("search-button");
const SEARCH_INPUT_S: HTMLElement = document.getElementById("search-input-s");
const SEARCH_INPUT: HTMLElement = document.getElementById("search-input");

//  EVENTS
const SEARCH_BUTTON_S_EVENT: string = "click";
const SEARCH_BUTTON_EVENT: string = "click";
const SEARCH_INPUT_S_EVENT: string = "keyup";
const SEARCH_INPUT_EVENT: string = "keyup";

export default function searchsListener(): void {
    SEARCH_INPUT_S.addEventListener(SEARCH_INPUT_S_EVENT, searchInputHandler);
    SEARCH_INPUT.addEventListener(SEARCH_INPUT_EVENT, searchInputHandler);
    SEARCH_BUTTON_S.addEventListener(SEARCH_BUTTON_S_EVENT, searchButtonHandler);
    SEARCH_BUTTON.addEventListener(SEARCH_BUTTON_EVENT, searchButtonHandler);
}
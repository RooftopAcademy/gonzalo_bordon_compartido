import Router from "../class/Router";
import filterHandler from "../handlers/filterHandler";

//  HTML
const FILTER_SEND_BTN: HTMLElement = document.getElementById("filter-send");

//  EVENTS
const FILTER_SEND_BTN_EVENT: string = "click";

export default function filterSendListener(): void {
  FILTER_SEND_BTN.addEventListener(FILTER_SEND_BTN_EVENT, filterHandler);
}

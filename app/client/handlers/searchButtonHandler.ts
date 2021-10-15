import { SEARCH_PAIR_INPUTS } from "../config";
import sendSearchRequest from "../scripts/sendSearchRequest";

export default function searchButtonHandler(
    e: Event
): void {
    const BUTTON: HTMLElement = e.target as HTMLElement;
    sendSearchRequest(SEARCH_PAIR_INPUTS[BUTTON.id] as HTMLInputElement);
}

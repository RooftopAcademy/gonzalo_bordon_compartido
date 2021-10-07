import sendSearchRequest from "../scripts/sendSearchRequest";

export default function searchInputHandler(
    e: Event
): void {
    if ((e as KeyboardEvent).keyCode === 13) 
        sendSearchRequest(e.target as HTMLInputElement);
}
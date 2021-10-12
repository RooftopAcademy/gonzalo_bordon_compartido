import app from "../main";

export default function sendSearchRequest(
    input: HTMLInputElement
): void {
    app.router.setSearchURL({
        "htmlFileName": "products",
        "search": input.value
    })
}
import Router from "../class/Router";
//import { CURRENT_PAGE } from "../config";

export default function sendSearchRequest(
    input: HTMLInputElement
): void {
    //if (CURRENT_PAGE !== "products") {
        return Router.followWithParams("/products", {
            "search": input.value
        })
    //}
}
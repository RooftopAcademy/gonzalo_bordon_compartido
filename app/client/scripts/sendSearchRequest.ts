import Router from "../class/Router";
//import { CURRENT_PAGE } from "../config";

export default function sendSearchRequest(
    input: HTMLInputElement
): void {
    //if (CURRENT_PAGE !== "products") {
        console.log(input.value)
        return Router.followWithQuery("/products", {
            search: input.value
        })
    //}
}
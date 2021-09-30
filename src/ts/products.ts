import { getSearchURL, setSearchURL } from "./script";


function sendWithSearchParam(e: Event) {
    setSearchURL({
        "htmlFileName": "products",
        "page": (e.target as HTMLElement).dataset.page,
        "search": getSearchURL().search
    })
}

export {
    sendWithSearchParam
}
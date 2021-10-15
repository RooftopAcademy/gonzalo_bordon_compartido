import { htmlFileName } from "../types/search";

export default interface SearchURLParams {
    htmlFileName: htmlFileName,
    page: string,
    id: string,
    search: string
}
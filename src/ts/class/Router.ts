//  INTERFACES
import SearchURLParams from "../interfaces/SearchURLParams";

//  TYPES
import { htmlFileName, searchParam, searchURLSetter } from "../types/search";

//  CONSTANTS
import { DEFAULT_HTML_FILE, PAGES } from "../config";

export default class Router {
    private readonly HTML_FILE_NAME: htmlFileName;
    private readonly PAGE: string;
    private readonly COD: string;
    private readonly SEARCH: string;
    private URL_SEARCH: URLSearchParams;

    constructor() {
        this.URL_SEARCH = new URLSearchParams(document.location.search);

        this.HTML_FILE_NAME = this.fixFileName(this.URL_SEARCH.get("htmlFileName") as htmlFileName);
        this.PAGE = this.URL_SEARCH.get("page");
        this.COD = this.URL_SEARCH.get("cod");
        this.SEARCH = this.URL_SEARCH.get("search");
    }

    /**
     * @returns the Search URL Param.
     */
    public getSearchURL(): SearchURLParams {
        return {
            htmlFileName: this.HTML_FILE_NAME,
            page: this.PAGE || "",
            cod: this.COD || "",
            search: this.SEARCH || "",
        }
    }

    /**
     * @returns the File Name if is an htmlFileName, otherwise, the Default HTML File.
     */
    private fixFileName(fileName: htmlFileName): htmlFileName {
        return PAGES.includes(fileName) ? fileName as htmlFileName : DEFAULT_HTML_FILE;
    }

    /**
     * Sets the Search URL Param.
     * @param urlParamsSetter the params and values to set in the Search URL Param.
     */
    public setSearchURL(urlParamsSetter: searchURLSetter): void {
        Object.keys(urlParamsSetter).forEach((searchParam: string): void => {
            this.URL_SEARCH.set(searchParam, urlParamsSetter[(searchParam as searchParam)]); 
        })
    }

    /**
     * Navigate to the Search URL Param Setted.
     * @returns void
     */
    public navigateSearchURL(): void {
        window.location.search = this.stringfyURLSearch();
    }

    /**
     * @returns the HTML File Name.
     */
    public getHTMLFileName(): htmlFileName {
        return this.HTML_FILE_NAME;
    }
    
    /**
     * @returns the Search URL Param Setted stringe parsed.
     */
    private stringfyURLSearch(): string {
        let newSearch = "?";
        Array.from(this.URL_SEARCH.entries()).forEach((URL_PAIR): void => {
            newSearch += `${URL_PAIR[0]}=${URL_PAIR[1]}&`;
        });
    
        return newSearch.slice(0, newSearch.length - 1);
    }
}
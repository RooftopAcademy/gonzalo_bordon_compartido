import ApiProduct from "../interfaces/ApiProduct";

import { apiError } from "../types/api";

import { API_ERROR, API_POSTS } from "../config";
import apiErrorHandler from "../errors/apiErrorHandler";

export default class API {
    public static async getPost(
        q: string | number
    ): Promise<ApiProduct | apiError> { 
        return await fetch(API_POSTS + q)
            .then(e => e.json())
            .then(res => (Object.keys(res).length === 0) 
                            ? API_ERROR 
                            : res
            );
    }
    
    public static async getPosts(
        search: string = ""
    ): Promise<ApiProduct[] | apiError> { 
        const SEARCH_REGEX: RegExp = new RegExp(search);
        const API_RESPONSE: ApiProduct[] | apiError = await fetch(API_POSTS)
            .then(e => e.json())
            .then(res => (res.length === 0) ? API_ERROR: res);
    
        return (typeof API_RESPONSE === "string") 
                ? API_RESPONSE 
                : API_RESPONSE.filter(post => SEARCH_REGEX.test(post.title.toLowerCase()));
    }

    /**
     *
     * @param apiResponse An API method return
     * @returns if the api is or not an Error
     */
    public static isApiError(
        apiResponse: ApiProduct[] | apiError | ApiProduct,
    ): boolean {
        if (typeof apiResponse === "string") {
            apiErrorHandler("Ha ocurrido un error.");
            return true;
        }

        return false;
    }
}
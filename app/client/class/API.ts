import Product from "../interfaces/Product";

import { apiError } from "../types/api";

import { API_ERROR } from "../config";

import apiErrorHandler from "../errors/apiErrorHandler";

export default abstract class API {
  public static async fetchAPI(
    url: string,
    data?: object
  ): Promise<Product[] | apiError | Product> {
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then((e) => e.json())
      .then((res) => (Object.keys(res).length === 0 ? API_ERROR : res));
  }

  /**
   *
   * @param apiResponse An API method return
   * @returns if the api is or not an Error
   */
  public static isApiError(apiResponse: Product[] | apiError | Product): boolean {
    if (typeof apiResponse === "string") {
      apiErrorHandler("Ha ocurrido un error.");
      return true;
    }

    return false;
  }
}

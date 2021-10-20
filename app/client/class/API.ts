import Product from "../interfaces/Product";

import { apiError } from "../types/api";

import { API_ERROR } from "../config";

import apiErrorHandler from "../errors/apiErrorHandler";

export default abstract class API {
  public static async fetchAPI(
    url: string,
    data?: object,
    method: string = "POST"
  ): Promise<any | apiError> {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();

    if (response.ok) {
      return Object.keys(responseJson).length === 0 ? API_ERROR : responseJson;
    }
    return (responseJson as any).message;
  }

  public static async fetchRedirectAPI(
    url: string,
    data?: object,
    method: string = "POST"
  ): Promise<any | apiError> {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();

    if (response.ok) {
      return Object.keys(responseJson).length === 0 ? API_ERROR : responseJson;
    }
    return (responseJson as any).message;
  }

  /**
   *
   * @param apiResponse An API method return
   * @returns if the api is or not an Error
   */
  public static isApiError(apiResponse: any | apiError): boolean {
    return (typeof apiResponse === "string")
  }
}

import { htmlFileName } from "../types/search";

export default class Router {
  public static follow(path: string): void {
    window.location.replace(window.location.origin + path);
  }

  public static followWithQuery(path: string, query: any): void {
    window.location.replace(
      window.location.origin + path + Router.stringfyQuery(query)
    );
  }

  public static followWithCurrentQuery(path: string): void {
    window.location.replace(window.location.origin + path + Router.getQuery());
  }

  public static getQuery(): string {
    return window.location.search;
  }

  public static createURL(path: string): string {
    return window.location.origin + path;
  }

  public static getPage(): htmlFileName {
    return window.location.pathname.split("/")[1] as htmlFileName;
  }

  public static getParam(nParam: number): string {
    return window.location.pathname.split("/")[nParam + 1];
  }

  private static stringfyQuery(query: any): string {
    return (
      "?" +
      Object.keys(query)
        .map((key) => `${key}=${query[key]}`)
        .join("&")
    );
  }
}

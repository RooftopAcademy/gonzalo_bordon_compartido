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

  public static followWithStringQuery(path: string, query: string): void {
    window.location.replace(window.location.origin + path + query);
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

  public static parseQuery(): any {
    const query: any = {};
    window.location.search
      .replace("?", "")
      .split("&")
      .forEach((entry) => {
        const pair: string[] = entry.split("=");
        if (query[pair[0]]) {
          if (query[pair[0]] instanceof Array) {
            return query[pair[0]].push(pair[1]);
          }
          return (query[pair[0]] = [query[pair[0]], pair[1]]);
        }
        query[pair[0]] = pair[1];
      });

    return query;
  }

  private static stringfyQuery(query: any): string {
    return "?" + Router.appendStringfyQuery(query);
  }

  private static appendStringfyQuery(query: any): string {
    return Object.keys(query)
      .filter(
        (key) =>
          Boolean(query[key]) &&
          (query[key] instanceof Array ? query[key].length !== 0 : true)
      )
      .map((key) => {
        console.log(key, query[key]);
        return query[key] instanceof Array
          ? (query[key] as string[]).map((value) => `${key}=${value}`).join("&")
          : `${key}=${query[key]}`;
      })
      .join("&");
  }
}

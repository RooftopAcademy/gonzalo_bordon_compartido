export default class Router {
  public static followWithParams(
    path: string,
    params: any
  ): void {
    window.location.replace(
      window.location.origin + path + Router.stringfyParams(params)
    );
  }

  public static followWithCurrentParams(
    path: string
  ): void {
    window.location.replace(
      window.location.origin + path + Router.getParams()
    );
  }

  public static getParams(): string {
    return window.location.search;
  }

  public static createURL(path: string): string {
    return window.location.origin + path;
  }

  private static stringfyParams(params: any): string {
    return (
      "?" +
      Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join("&")
    );
  }
}
import Product from "../interfaces/Product";

const fs = require("fs");

const { DATABASE_DIR } = require("../config");

const DATABASE_TABLE_PRODUCT: string = DATABASE_DIR + "/products.json";
const PRODUCTS: Product[] = JSON.parse(
  fs.readFileSync(DATABASE_TABLE_PRODUCT, "utf8")
);

export default class API {
  public static getProduct(id: number): Product {
    return PRODUCTS.find((product: any) => product.id === id);
  }

  public static getProducts(
    search: string = "",
    min: number = null,
    max: number = null
  ): Product[] {
    const SEARCH_REGEX: RegExp = new RegExp(search);
    return PRODUCTS.filter(
      (product: Product) =>
        SEARCH_REGEX.test(product.title.toLowerCase()) &&
        API.inRange(product.price, min, max)
    );
  }

  public static getProductsByIds(IDList: string[] = []): Product[] {
    return PRODUCTS.filter((product: Product) =>
      IDList.includes(String(product.id))
    );
  }

  private static inRange(
    elem: number,
    min: number = null,
    max: number = null
  ): boolean {
    return (min ? elem >= min : true) && (max ? elem <= max : true);
  }
}

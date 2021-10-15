import Product from "../interfaces/Product";

import DataBase from "./DataBase";

export default class ProductsAPI extends DataBase {
  private params: any = {};
  private body: any = {};
  private products: Product[];

  constructor(req: any) {
    super("products");
    this.params = req.params;
    this.body = req.body;
    this.products = this.getTable();
  }

  public getProducts(): {
    products: Product[];
    maxPage: number;
    page: number;
  } {
    const { page, min, max } = this.params;
    const { search } = this.body;
    const SEARCH_REGEX: RegExp = new RegExp(search);

    const products: Product[] = this.products.filter(
      (product: Product) =>
        SEARCH_REGEX.test(product.title.toLowerCase()) &&
        this.inRange(product.price, min, max)
    );

    const maxPage: number = Math.ceil(products.length / 10);
    const currentPage: number = +page || 1;
    const firstProductIndex: number = (currentPage - 1) * 10;

    return {
      products: products.slice(firstProductIndex, firstProductIndex + 10),
      maxPage,
      page: currentPage,
    };
  }

  public getProductsById(): Product[] {
    return this.products.filter((product: Product) =>
      this.body.IDList.includes(String(product.id))
    );
  }

  public getProduct(): Product {
    const { id } = this.params;
    return this.products.find((product: any) => product.id === id);
  }
}

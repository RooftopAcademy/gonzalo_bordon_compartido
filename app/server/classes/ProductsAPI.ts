import Product from "../interfaces/Product";

import API from "./API";

export default class ProductsAPI extends API {
  private params: any = {};
  private body: any = {};

  constructor(req: any) {
    super();
    this.params = req.params;
    this.body = req.body;
  }

  public getProducts(): {
    products: Product[];
    maxPage: number;
    page: number;
  } {
    const { page, min, max } = this.params;
    const { search } = this.body;
    const products: Product[] = API.getProducts(search, min, max);

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
    return API.getProductsByIds(this.body.IDList);
  }
}
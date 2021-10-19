//  INTERFACES
import Product from "../../server/interfaces/Product";

//  TYPES
import { htmlString } from "../types/html";

//  COMPONENETS
import ProductsCardComponent from "../../server/components/ProductsCardComponent";
import PaginatorComponenet from "../../server/components/PaginatorComponent";

//  VIEWS
import Favorites from "./Favorites";

export default class UI {
  private document: HTMLElement;

  /**
   * @param document where the HTMLElement will be inserted.
   */
  constructor(document: HTMLElement) {
    this.document = document;
  }

  /**
   * Render ProductsView
   */
  public products(
    favorites: Favorites,
    products: Product[],
    page: number,
    maxPage: number
  ): void {
    const innerHTML: string = products
      .map((product: Product): string => ProductsCardComponent(product))
      .join("");
    PaginatorComponenet(page || 1, maxPage);
  }
}

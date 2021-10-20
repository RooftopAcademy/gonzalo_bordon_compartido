import Product from "../interfaces/Product";

import { htmlString } from "../types/html";

import ProductsAPI from "../classes/ProductsAPI";

import ProductsCardComponent from "../components/ProductsCardComponent";
import PaginatorComponent from "../components/PaginatorComponent";
import ProductsEmptyComponent from "../components/ProductsEmptyComponent";
import FilterCategoriesComponent from "../components/FilterCategoriesComponent";

module.exports = function productsGet(req: any, res: any) {
  const { products, page, maxPage } = new ProductsAPI(req).getProducts();

  const productsHTML: htmlString =
    products.length === 0
      ? ProductsEmptyComponent()
      : products
          .map((product: Product): string => ProductsCardComponent(product))
          .join("");

  const paginatorHTML: htmlString = PaginatorComponent(page, maxPage);
  const categoriesHTML: htmlString = FilterCategoriesComponent();

  console.log(categoriesHTML)
  
  res.render("products", {
    productsHTML,
    paginatorHTML,
    categoriesHTML
  });
};

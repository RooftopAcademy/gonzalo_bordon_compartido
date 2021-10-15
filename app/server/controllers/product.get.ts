import Product from "../interfaces/Product";

import ProductsAPI from "../classes/ProductsAPI";

import ProductSpecsComponent from "../components/ProductSpecsComponent";

module.exports = function productGet(req: any, res: any) {
  const product: Product = new ProductsAPI(req).getProduct();

  const config: any = product;
  config.productSpecs = ProductSpecsComponent(product.caracts);
  config.isFavorite = true;

  res.render("product", config);
};

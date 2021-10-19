import Product from "../interfaces/Product";

import API from "../classes/API";

import ProductSpecsComponent from "../components/ProductSpecsComponent";

module.exports = function productController(req: any, res: any) {
  const product: Product = API.getProduct(+req.params.id);

  const config: any = product;
  config.productSpecs = ProductSpecsComponent(product.caracts);
  config.isFavorite = true;

  res.render("product", config);
};

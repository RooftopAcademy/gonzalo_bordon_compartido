import ProductsAPI from "../classes/ProductsAPI";

module.exports = function productsIDsPost(req: any, res: any) {
  const response = new ProductsAPI(req).getProductsById()
  res.json(response);
}
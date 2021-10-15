import ProductsAPI from "../classes/ProductsAPI";

module.exports = function productsPost(req: any, res: any) {
  const response = new ProductsAPI(req).getProducts()
  res.json(response);
}
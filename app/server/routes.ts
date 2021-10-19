import ProductsAPI from "./classes/ProductsAPI";

const { Router } = require("express");
const router = Router();

// CONTROLLERS
const productsController = require("./routes/products.controller");
const productController = require("./routes/product.controller");
const indexController = require("./routes/index.controller");
const cartController = require("./routes/cart.controller");

router.get("/", indexController);
router.get("/products/:page", productsController);
router.get("/products", productsController);
router.get("/product/:id", productController);
router.get("/cart", cartController);

// POST
router.post("/products/ids", (req: any, res: any) => {
  const response = new ProductsAPI(req).getProductsById()
  res.json(response);
});
router.post("/products/:page", (req: any, res: any) => {
  const response = new ProductsAPI(req).getProducts()
  res.json(response);
});
router.post("/products", (req: any, res: any) => {
  const response = new ProductsAPI(req).getProducts()
  res.json(response);
});


router.use((req: any, res: any) => {
  res.status(404).render("404");
});

module.exports = router;

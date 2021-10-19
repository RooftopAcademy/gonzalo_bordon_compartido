"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProductsAPI_1 = __importDefault(require("./classes/ProductsAPI"));
var Router = require("express").Router;
var router = Router();
// CONTROLLERS
var productsController = require("./routes/products.controller");
var productController = require("./routes/product.controller");
var indexController = require("./routes/index.controller");
var cartController = require("./routes/cart.controller");
router.get("/", indexController);
router.get("/products/:page", productsController);
router.get("/products", productsController);
router.get("/product/:id", productController);
router.get("/cart", cartController);
// POST
router.post("/products/ids", function (req, res) {
    var response = new ProductsAPI_1.default(req).getProductsById();
    res.json(response);
});
router.post("/products/:page", function (req, res) {
    var response = new ProductsAPI_1.default(req).getProducts();
    res.json(response);
});
router.post("/products", function (req, res) {
    var response = new ProductsAPI_1.default(req).getProducts();
    res.json(response);
});
router.use(function (req, res) {
    res.status(404).render("404");
});
module.exports = router;

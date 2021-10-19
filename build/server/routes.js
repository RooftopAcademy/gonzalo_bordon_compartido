"use strict";
var Router = require("express").Router;
var router = Router();
// CONTROLLERS
var productsGet = require("./controllers/products.get");
var productGet = require("./controllers/product.get");
var indexGet = require("./controllers/index.get");
var usersGet = require("./controllers/users.get");
var cartGet = require("./controllers/cart.get");
var productsIDsPost = require("./controllers/productsIDs.post");
var productsPost = require("./controllers/products.post");
var usersPost = require("./controllers/users.post");
var usersPut = require("./controllers/users.put");
router.get("/", indexGet);
router.get("/products/:page", productsGet);
router.get("/products", productsGet);
router.get("/product/:id", productGet);
router.get("/users", usersGet);
router.get("/cart", cartGet);
// POST
router.post("/products/ids", productsIDsPost);
router.post("/products/:page", productsPost);
router.post("/products", productsPost);
router.post("/users", usersPost);
// PUT
router.put("/users", usersPut);
router.use(function (req, res) {
    res.status(404).render("404");
});
module.exports = router;

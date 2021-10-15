const { Router } = require("express");
const router = Router();

// CONTROLLERS
const productsGet = require("./controllers/products.get");
const productGet = require("./controllers/product.get");
const indexGet = require("./controllers/index.get");
const usersGet = require("./controllers/users.get");
const cartGet = require("./controllers/cart.get");

const productsIDsPost = require("./controllers/productsIDs.post");
const productsPost = require("./controllers/products.post");
const usersPost = require("./controllers/users.post");

const usersPut = require("./controllers/users.put");

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


router.use((req: any, res: any) => {
  res.status(404).render("404");
});

module.exports = router;

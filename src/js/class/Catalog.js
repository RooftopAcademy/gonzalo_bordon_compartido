"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Catalog = /** @class */ (function () {
    function Catalog() {
    }
    Catalog.convertProducts = function (apiProducts, page) {
        var PRODUCTS = [];
        apiProducts.splice(0, (page - 1) * 10);
        apiProducts.slice(0, 10).forEach(function (product) {
            PRODUCTS.push(Catalog.generateProduct(product));
        });
        return PRODUCTS;
    };
    Catalog.convertProduct = function (product) {
        return Catalog.generateProduct(product);
    };
    Catalog.generateProduct = function (product) {
        return {
            image: "src/img/noprew-index.png",
            title: product.title,
            desc: product.body,
            price: product.body.length * 20,
            caracts: {
                "Caraterística 1": "Especificación 1",
                "Caraterística 2": "Especificación 2",
                "Caraterística 3": "Especificación 3",
                "Caraterística 4": "Especificación 4",
                "Caraterística 5": "Especificación 5"
            },
            cod: product.id
        };
    };
    return Catalog;
}());
exports.default = Catalog;

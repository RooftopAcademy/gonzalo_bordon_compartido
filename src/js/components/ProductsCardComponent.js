"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ProductsCardComponent(_a) {
    var image = _a.image, cod = _a.cod, price = _a.price, title = _a.title;
    return /* html */ "\n        <div class=\"product-card\">\n            <a class=\"product-image\" href=\"?htmlFileName=product&cod=" + cod + "\">\n                <img src=\"" + image + "\">\n            </a>\n            <div class=\"product-info\">\n                <h5><a href=\"?htmlFileName=product&cod=" + cod + "\">" + title + "</a></h5>\n                <h6>$" + price + "</h6>\n            </div>\n            <a class=\"shopButton shopButton-products\" data-cod=\"" + cod + "\">Comprar</a>\n        </div>\n    ";
}
exports.default = ProductsCardComponent;

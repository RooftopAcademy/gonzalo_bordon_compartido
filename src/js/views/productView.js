"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function productView(_a, productSpecs) {
    var image = _a.image, title = _a.title, desc = _a.desc, price = _a.price, cod = _a.cod;
    return /* html */ "\n        <div class=\"product\">\n            <img src=\"" + image + "\">\n            <div class=\"product-info\">\n                <h2>" + title + "</h2>\n                <p>" + desc + "</p>\n                <div class=\"productSpecs\"><span class=\"product-spec\">Precio: </span>$" + price + "</div>\n                <div class=\"container-productSpecs\">\n                    " + productSpecs + "\n                </div>\n                <a class=\"shopButton\" data-cod=\"" + cod + "\">Comprar</a>\n            </div>\n        </div>\n    ";
}
exports.default = productView;

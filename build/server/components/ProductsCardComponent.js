"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ProductsCardComponent(_a, isFavorite) {
    var image = _a.image, id = _a.id, price = _a.price, title = _a.title;
    return /* html */ "\n        <div class=\"product-card\">\n            <div class=\"product-image\">\n                <div style=\"position:relative;\">\n                    <a href=\"/product/" + id + "\">\n                        <img src=\"" + image + "\">\n                    </a>\n                    <div class=\"favorites-icon " + (isFavorite ? "selected" : "") + "\">\n                        &#9733;\n                    </div>\n                </div>\n            </div>\n            <div class=\"product-info\">\n                <h5><a href=\"/product/" + id + "\">" + title + "</a></h5>\n                <h6>$" + price + "</h6>\n            </div>\n            <a class=\"shopButton shopButton-products\" data-id=\"" + id + "\">Comprar</a>\n        </div>\n    ";
}
exports.default = ProductsCardComponent;

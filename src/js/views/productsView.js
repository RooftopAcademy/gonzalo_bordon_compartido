"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function productsView(productsHTML, paginator) {
    return "\n        <h1 class=\"products-header\">Productos</h1>\n        <div class=\"products\" id=\"products\">\n            " + productsHTML + "\n        <div class=\"paginator\">\n            " + paginator + "\n        </div>\n    ";
}
exports.default = productsView;

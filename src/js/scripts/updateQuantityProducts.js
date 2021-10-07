"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
function updateQuantityProducts(q) {
    config_1.QUANTITY_PRODUCTS_INDICATOR.innerHTML = q;
}
exports.default = updateQuantityProducts;

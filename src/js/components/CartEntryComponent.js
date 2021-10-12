"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CartEntryComponent(_a) {
    var units = _a.units, price = _a.price, total = _a.total, id = _a.id, title = _a.title;
    return /* html */ "\n    <tr>\n        <td class=\"text-center adminTD\" data-product-id=\"" + id + "\">\n            <div class=\"reduceOneButton\">-1</div>\n            <div class=\"increaseOneButton\">+1</div>\n        </td>\n        <td class=\"conceptTable\">" + title + "</td>\n        <td class=\"text-center\">" + units + "</td>\n        <td class=\"text-center\">$" + price + "</td>\n        <td class=\"text-center\">$" + total + "</td>\n    </tr>\n    ";
}
exports.default = CartEntryComponent;

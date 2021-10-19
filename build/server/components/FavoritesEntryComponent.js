"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FavoritesEntryComponent(_a) {
    var price = _a.price, id = _a.id, title = _a.title, body = _a.body;
    return /* html */ "\n    <tr>\n      <td class=\"conceptTable\">\n        <a class=\"product-image\" href=\"?htmlFileName=product&id=" + id + "\">\n          " + title + "\n        </a>\n      </td>\n      <td class=\"text-center\"></td>\n      <td class=\"text-center\">" + body + "</td>\n      <td class=\"text-center\">$" + price + "</td>\n      <td class=\"text-center\">F</td>\n    </tr>\n  ";
}
exports.default = FavoritesEntryComponent;

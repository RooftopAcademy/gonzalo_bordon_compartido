"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.appendOnProduct = function (product) {
        var productSpecs = "";
        for (var key in product.caracts) {
            productSpecs += /* html */ "\n                <div class=\"productSpecs\"><span class=\"product-spec\">" + key + ": </span> " + product.caracts[key] + "</div>\n            ";
        }
        return /* html */ "\n            <img src=\"" + product.image + "\">\n            <div class=\"product-info\">\n                <h2>" + product.title + "</h2>\n                <p>" + product.desc + "</p>\n                <div class=\"productSpecs\"><span class=\"product-spec\">Precio: </span>$" + product.price + "</div>\n                <div class=\"container-productSpecs\">\n                    " + productSpecs + "\n                </div>\n                <a class=\"shopButton\" data-cod=\"" + product.cod + "\">Comprar</a>\n            </div>\n        ";
    };
    UI.appendOnProducts = function (product) {
        return /* html */ "\n        <div class=\"product-card\">\n            <a class=\"product-image\" href=\"?htmlFileName=product&cod=" + product.cod + "\">\n                <img src=\"" + product.image + "\">\n            </a>\n            <div class=\"product-info\">\n                <h5><a href=\"?htmlFileName=product&cod=" + product.cod + "\">" + product.title + "</a></h5>\n                <h6>$" + product.price + "</h6>\n            </div>\n            <a class=\"shopButton shopButton-products\" data-cod=\"" + product.cod + "\">Comprar</a>\n        </div>\n        ";
    };
    UI.appendOnCart = function (products) {
        var response = {};
        var innerHTML = "";
        var total = 0;
        if (products) {
            for (var key in products) {
                innerHTML += /* html */ "\n                    <tr>\n                        <td class=\"text-center adminTD\"><div class=\"reduceOneButton\">-1</div><div class=\"increaseOneButton\">+1</div></td>\n                        <td class=\"conceptTable\">" + key + "</td>\n                        <td class=\"text-center\">" + products[key].units + "</td>\n                        <td class=\"text-center\">$" + products[key].price + "</td>\n                        <td class=\"text-center\">$" + products[key].total + "</td>\n                    </tr>\n                ";
                total += products[key].total;
            }
            response.body = innerHTML;
            response.extra = "$" + total;
        }
        else
            response.error = "No hay ningún producto añadido al carrito";
        return response;
    };
    UI.appendOnPaginator = function (page, maxPage) {
        console.log(maxPage);
        var innerHTML = "";
        var left = page - 1;
        var center = page;
        var right = page + 1;
        if (page >= 3 && maxPage > 3)
            innerHTML += "<a class=\"js-paginator\" data-page=\"1\"><<</a>";
        if (page === 1) {
            ++left;
            ++center;
            ++right;
        }
        else if (page === maxPage) {
            --left;
            --center;
            --right;
        }
        innerHTML +=
            ((left > 0 && left <= maxPage)
                ? "<a class=\"js-paginator " + ((left === page) ? "active" : "") + "\" data-page=\"" + left + "\">" + left + "</a>"
                : "") +
                ((center > 0 && center <= maxPage)
                    ? "<a class=\"js-paginator " + ((center === page) ? "active" : "") + "\" data-page=\"" + center + "\">" + center + "</a>"
                    : "") +
                ((right > 0 && right <= maxPage)
                    ? "<a class=\"js-paginator " + ((right === page) ? "active" : "") + "\" data-page=\"" + right + "\">" + right + "</a>"
                    : "");
        if (page <= 8 && maxPage > 3)
            innerHTML += "<a class=\"js-paginator\" data-page=\"" + maxPage + "\">>></a>";
        return innerHTML;
    };
    return UI;
}());
exports.default = UI;

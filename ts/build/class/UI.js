"use strict";
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.appendOnProduct = function (product) {
        var productSpecs = "";
        for (var key in product.caracts) {
            productSpecs += /* html */ "\n                <div class=\"productSpecs\"><span class=\"product-spec\">" + key + ": </span> " + product.caracts[key] + "</div>\n            ";
        }
        return /* html */ "\n            <img src=\"" + product.image + "\">\n            <div class=\"product-info\" id=\"product_cod-" + product.cod + "\">\n                <h2>" + product.title + "</h2>\n                <p>" + product.desc + "</p>\n                <div class=\"productSpecs\"><span class=\"product-spec\">Precio: </span>$" + product.price + "</div>\n                <div class=\"container-productSpecs\">\n                    " + productSpecs + "\n                </div>\n                <a class=\"shopButton\">Comprar</a>\n            </div>\n        ";
    };
    UI.appendOnProducts = function (product) {
        return /* html */ "\n        <div class=\"product-card\" id=\"product_cod-" + product.cod + "\">\n            <a class=\"product-image\" href=\"product.html?cod=" + product.cod + "\">\n                <img src=\"" + product.image + "\">\n            </a>\n            <div class=\"product-info\">\n                <h5><a href=\"product.html?cod=" + product.cod + "\">" + product.title + "</a></h5>\n                <h6>$" + product.price + "</h6>\n            </div>\n            <a class=\"shopButton shopButton-products\">Comprar</a>\n        </div>\n        ";
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
    UI.appendOnPaginator = function (page) {
        var innerHTML = "";
        var left = page - 1;
        var center = page;
        var right = page + 1;
        if (page >= 3)
            innerHTML += "<a href=\"products.html?page=1\"><<</a>";
        if (page === 1) {
            ++left;
            ++center;
            ++right;
        }
        else if (page === 10) {
            --left;
            --center;
            --right;
        }
        innerHTML += "\n            <a class=\"" + ((left === page) ? "active" : "") + "\" href=\"products.html?page=" + left + "\">" + left + "</a>\n            <a class=\"" + ((center === page) ? "active" : "") + "\" href=\"products.html?page=" + center + "\">" + center + "</a>\n            <a class=\"" + ((right === page) ? "active" : "") + "\" href=\"products.html?page=" + right + "\">" + right + "</a>\n        ";
        if (page <= 8)
            innerHTML += "<a href=\"products.html?page=10\">>></a>";
        return innerHTML;
    };
    return UI;
}());

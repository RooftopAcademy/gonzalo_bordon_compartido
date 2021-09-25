"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//  CLASES
var Cart = /** @class */ (function () {
    function Cart() {
        var cart = sessionStorage.getItem("cart");
        this._jsonCart = {};
        this._quantityProducts = 0;
        if (!cart)
            sessionStorage.setItem("cart", "{}");
        else {
            this._jsonCart = JSON.parse(cart);
            for (var _i = 0, _a = Object.keys(this._jsonCart); _i < _a.length; _i++) {
                var productIndex = _a[_i];
                this._quantityProducts += this._jsonCart[productIndex].units;
            }
        }
        ;
    }
    Cart.prototype.addToCart = function (product) {
        if (typeof product !== "string") {
            if (!this._jsonCart[product.title]) {
                this._jsonCart[product.title] = {
                    id: product.id,
                    price: product.body.length * 20,
                    total: product.body.length * 20,
                    units: 1
                };
            }
            else {
                this._jsonCart[product.title].units += 1;
                this._jsonCart[product.title].total += product.body.length * 20;
            }
            ;
            this._quantityProducts += 1;
            sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
        }
    };
    Cart.prototype.removeFromCart = function (concept) {
        if (this._jsonCart[concept].units === 1)
            delete this._jsonCart[concept];
        else {
            this._jsonCart[concept].units -= 1;
            this._jsonCart[concept].total -= this._jsonCart[concept].price;
        }
        this._quantityProducts -= 1;
        sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
    };
    Cart.prototype.lastMomentAppendToCart = function (concept) {
        this._jsonCart[concept].units += 1;
        this._jsonCart[concept].total += this._jsonCart[concept].price;
        this._quantityProducts += 1;
        sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
    };
    Cart.prototype.close = function () {
        sessionStorage.removeItem("cart");
        this._jsonCart = {};
        this._quantityProducts = 0;
        alert("Imagina que la compra finalizó");
    };
    Cart.prototype.getProducts = function () { return this._jsonCart; };
    Cart.prototype.getQuantityProducts = function () { return this._quantityProducts; };
    return Cart;
}());
var Product = /** @class */ (function () {
    function Product(image, title, desc, price, caracts, cod) {
        this.image = image;
        this.title = title;
        this.desc = desc;
        this.price = price;
        this.caracts = caracts;
        this.cod = cod;
    }
    return Product;
}());
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
        return /* html */ "\n        <div class=\"product-card\" id=\"product_cod-" + product.cod + "\">\n            <a class=\"js-SAP_a product-image\" data-html-file-name=\"product.html\" data-cod=\"" + product.cod + "\">\n                <img src=\"" + product.image + "\">\n            </a>\n            <div class=\"product-info\">\n                <h5><a class=\"js-SAP_a\" data-html-file-name=\"product.html\" data-cod=\"" + product.cod + "\">" + product.title + "</a></h5>\n                <h6>$" + product.price + "</h6>\n            </div>\n            <a class=\"shopButton shopButton-products\">Comprar</a>\n        </div>\n        ";
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
            innerHTML += "<a class=\"js-SAP_a \" data-html-file-name=\"products.html\" data-page=\"1\"><<</a>";
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
        innerHTML += "\n            <a class=\"js-SAP_a " + ((left === page) ? "active" : "") + "\" data-html-file-name=\"products.html\" data-page=\"" + left + "\">" + left + "</a>\n            <a class=\"js-SAP_a " + ((center === page) ? "active" : "") + "\" data-html-file-name=\"products.html\" data-page=\"" + center + "\">" + center + "</a>\n            <a class=\"js-SAP_a " + ((right === page) ? "active" : "") + "\" data-html-file-name=\"products.html\" data-page=\"" + right + "\">" + right + "</a>\n        ";
        if (page <= 8)
            innerHTML += "<a data-html-file-name=\"products.html\" data-page=\"10\">>></a>";
        return innerHTML;
    };
    return UI;
}());
//  CONSTANTES
var API = "https://jsonplaceholder.typicode.com/";
var cart;
var pagesHTML = {
    "cart.html": cartFile,
    "product.html": productFile,
    "products.html": productsFile,
    "index.html": indexFile,
};
var nav_buttons = document.getElementsByClassName("openNav-button");
var nav_container = document.getElementById("nav-container");
var jsSAP_a = document.getElementsByClassName("js-SAP_a");
//  FUNCIONES
function getPost(q) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(API + ("posts/" + q)).then(function (e) { return __awaiter(_this, void 0, void 0, function () {
                        var res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, e.json()];
                                case 1:
                                    res = _a.sent();
                                    return [2 /*return*/, (res === {}) ? "ERROR" : res];
                            }
                        });
                    }); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var apiResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(API + "posts").then(function (e) { return e.json(); })];
                case 1:
                    apiResponse = _a.sent();
                    return [2 /*return*/, (apiResponse.length === 0) ? "ERROR" : apiResponse];
            }
        });
    });
}
function listenToShopButtons() {
    var _this = this;
    var shopButtons = document.getElementsByClassName("shopButton");
    Array.from(shopButtons).forEach(function (shopButton) {
        shopButton.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
            var id, product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(e.target instanceof HTMLElement)) return [3 /*break*/, 3];
                        id = e.target.parentElement.id.replace("product_cod-", "");
                        return [4 /*yield*/, getPost(id)];
                    case 1:
                        product = _a.sent();
                        return [4 /*yield*/, cart.addToCart(product)];
                    case 2:
                        _a.sent();
                        updateQuantityProducts(cart.getQuantityProducts());
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });
}
function updateQuantityProducts(q) { document.getElementById("quantityProducts").innerHTML = String(q); }
function indexFile() {
    return /* html */ "\n        <header>\n            <h1>Furey's Lab</h1>\n            <h4>Soluciones Inteligentes</h4>\n        </header>\n        <article id=\"about-us\">\n            <h2>Sobre Nosotros</h2>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, fugiat aliquid. Est sint eligendi harum dolore. Ipsam accusantium earum doloribus dignissimos illo hic voluptatum harum ducimus totam? Obcaecati totam laudantium quidem velit hic voluptatibus ratione deleniti saepe ullam tenetur enim eveniet eligendi ea optio aliquid esse cumque, facilis repellat commodi.</p>\n        </article>\n        <article class=\"article-even\">\n            <h3>Calidad Garantizada</h3>\n            <h2>Nuestros Productos</h2>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vel, dolorem rem reiciendis cupiditate officia.</p>\n            <a class=\"js-SAP_a shop-btn\" href=\"products.html\">Comprar Ahora</a>\n        </article>\n        <article class=\"contact\" id=\"contact\">\n            <div class=\"contact-card\">\n                <h2>Cont\u00E1ctanos</h2>\n                <form>\n                    <div class=\"input-group\">\n                        <h5>Nombre y Apellido:</h5>\n                        <input placeholder=\"Juan Perez \" />\n                    </div>\n                    <div class=\"input-group\">\n                        <h5>Correo Electr\u00F3nico:</h5>\n                        <input placeholder=\"example@example.com\" />\n                    </div>\n                    <div class=\"input-group\">\n                        <h5>Mensaje:</h5>\n                        <textarea style=\"width: 100%;\" rows=\"5\"></textarea>\n                    </div>\n                </form>\n            </div>\n        </article>\n    ";
}
function productsFile() {
    return __awaiter(this, void 0, void 0, function () {
        var page, products, innerHTML, index;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = Number(getHistory().page) || 1;
                    return [4 /*yield*/, getPosts()];
                case 1:
                    products = _a.sent();
                    if (typeof products !== "string") {
                        innerHTML = "\n            <h1>Productos</h1>\n            <div class=\"products\" id=\"products\">\n        ";
                        products.splice(0, (page - 1) * 10);
                        for (index = 0; index < 10; index++) {
                            innerHTML += UI.appendOnProducts(new Product("img/noprew-index.png", products[index].title, "", products[index].body.length * 20, {}, products[index].id));
                        }
                        return [2 /*return*/, innerHTML + ("\n            </div>\n            <div class=\"paginator\">\n                " + UI.appendOnPaginator(page) + "\n            </div>\n        ")];
                    }
                    else {
                        if (confirm("Ha ocurrido un ERROR"))
                            window.history.back();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function productFile() {
    return __awaiter(this, void 0, void 0, function () {
        var cod, product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cod = getHistory().cod;
                    return [4 /*yield*/, getPost(cod)];
                case 1:
                    product = _a.sent();
                    if (typeof product !== "string") {
                        return [2 /*return*/, "\n            <div class=\"product\">\n                " + UI.appendOnProduct(new Product("img/noprew-index.png", product.title, product.body, product.body.length * 20, {
                                "Caraterística 1": "Especificación 1",
                                "Caraterística 2": "Especificación 2",
                                "Caraterística 3": "Especificación 3",
                                "Caraterística 4": "Especificación 4",
                                "Caraterística 5": "Especificación 5"
                            }, product.id)) + "\n            </div>\n        "];
                    }
                    else {
                        if (confirm("Este Producto no existe"))
                            goBack();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function cartFile() {
    return /* html */ "\n    <div class=\"cartTitle\">\n        <h1>Bienvenido al Carrito</h1>\n    </div>\n    <div>\n        <h3 class=\"cartErrorMessage\" id=\"cartErrorMessage\"></h3>\n    </div>\n    <div class=\"tableContainer\">\n        <table>\n            <thead>\n                <tr>\n                    <th>A</th>\n                    <th>Concepto</th>\n                    <th>Unidades</th>\n                    <th>Precio Unitario</th>\n                    <th>Total</th>\n                </tr>\n            </thead>\n            <tbody id=\"tBody\"></tbody>\n            <tfoot>\n                <tr>\n                    <th colspan=\"4\">Total:</th>\n                    <th id=\"total\"></th>\n                </tr>\n            </tfoot>\n        </table>\n        <div class=\"cartCloseButtonContainer\">\n            <button class=\"cartCloseButton\" onclick=\"closeCart()\">Finalizar Compra</button>\n        </div>\n    </div>\n";
}
function loadTable() {
    var products = cart.getProducts();
    var responseToCart = UI.appendOnCart(products);
    if (responseToCart.error)
        document.getElementById("cartErrorMessage").innerHTML = responseToCart.error;
    else {
        document.getElementById("tBody").innerHTML = responseToCart.body;
        document.getElementById("total").innerHTML = responseToCart.extra;
        for (var _i = 0, _a = Array.from(document.getElementsByClassName("reduceOneButton")); _i < _a.length; _i++) {
            var reduceOneButton = _a[_i];
            reduceOneButton.addEventListener("click", function (e) {
                if (e.target instanceof HTMLElement) {
                    cart.removeFromCart(e.target.parentElement.nextElementSibling.innerHTML);
                    loadTable();
                }
            });
        }
        for (var _b = 0, _c = Array.from(document.getElementsByClassName("increaseOneButton")); _b < _c.length; _b++) {
            var increaseOneButton = _c[_b];
            increaseOneButton.addEventListener("click", function (e) {
                if (e.target instanceof HTMLElement) {
                    cart.lastMomentAppendToCart(e.target.parentElement.nextElementSibling.innerHTML);
                    loadTable();
                }
            });
        }
    }
    ;
    updateQuantityProducts(cart.getQuantityProducts());
}
function closeCart() {
    cart.close();
    loadTable();
}
function getHistory() {
    var historyData = JSON.parse(sessionStorage.getItem("historyData"));
    if (historyData === null) {
        historyData = {
            htmlFileName: "index.html",
            page: null,
            cod: null,
            oldData: null,
            newData: null,
        };
        sessionStorage.setItem("historyData", JSON.stringify(historyData));
    }
    return historyData;
}
function goBack() {
    window.history.replaceState(null, "", "index.html");
    var _a = getHistory(), htmlFileName = _a.htmlFileName, page = _a.page, cod = _a.cod, oldData = _a.oldData, newData = _a.newData;
    if (oldData !== null) {
        sessionStorage.setItem("historyData", JSON.stringify({
            htmlFileName: oldData.htmlFileName,
            page: oldData.page,
            cod: oldData.cod,
            oldData: oldData.oldData,
            newData: {
                htmlFileName: htmlFileName,
                page: page,
                cod: cod,
                oldData: null,
                newData: newData || null,
            },
        }));
        loadFile();
    }
    else {
        window.history.back();
    }
}
function goForward() {
    window.history.pushState(null, "", "index.html");
    var _a = getHistory(), htmlFileName = _a.htmlFileName, page = _a.page, cod = _a.cod, oldData = _a.oldData, newData = _a.newData;
    if (newData !== null) {
        sessionStorage.setItem("historyData", JSON.stringify({
            htmlFileName: newData.htmlFileName,
            page: newData.page,
            cod: newData.cod,
            oldData: {
                htmlFileName: htmlFileName,
                page: page,
                cod: cod,
                oldData: oldData || null,
                newData: null,
            },
            newData: newData.newData,
        }));
        loadFile();
    }
}
//  EJECUTAR AL INICIO
window.onload = loadFile;
window.onpagehide = goBack;
window.onpageshow = goForward;
function loadFile() {
    return __awaiter(this, void 0, void 0, function () {
        var htmlFileName, innerHTML;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cart = new Cart();
                    htmlFileName = getHistory().htmlFileName;
                    return [4 /*yield*/, pagesHTML[htmlFileName || "index.html"]()];
                case 1:
                    innerHTML = _a.sent();
                    if (typeof innerHTML === "string") {
                        document.getElementById("app").innerHTML = innerHTML;
                    }
                    if (["products.html", "product.html"].indexOf(htmlFileName) !== -1)
                        listenToShopButtons();
                    else if (htmlFileName === "cart.html")
                        loadTable();
                    updateQuantityProducts(cart.getQuantityProducts());
                    Array.from(jsSAP_a).forEach(function (a_button) {
                        if (a_button instanceof HTMLElement) {
                            a_button.addEventListener("click", function (e) {
                                e.preventDefault();
                                var currentData = a_button.dataset;
                                sessionStorage.setItem("historyData", JSON.stringify({
                                    htmlFileName: currentData.htmlFileName,
                                    page: currentData.page,
                                    cod: currentData.cod,
                                    oldData: getHistory(),
                                    newData: null,
                                }));
                                window.history.pushState(null, "", "index.html");
                                loadFile();
                            });
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
Array.from(nav_buttons).forEach(function (nav_button) {
    nav_button.addEventListener("click", function () {
        if (nav_container.className.search("active") === -1)
            nav_container.className += " active";
        else
            nav_container.className = nav_container.className.replace(" active", "");
    });
});

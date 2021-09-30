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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsFile = exports.productFile = exports.indexFile = exports.cartFile = void 0;
var Product_1 = __importDefault(require("./class/Product"));
var UI_1 = __importDefault(require("./class/UI"));
var api_1 = require("./api");
var script_1 = require("./script");
function cartFile() {
    return /* html */ "\n    <div class=\"cartTitle\">\n        <h1>Bienvenido al Carrito</h1>\n    </div>\n    <div>\n        <h3 class=\"cartErrorMessage\" id=\"cartErrorMessage\"></h3>\n    </div>\n    <div class=\"tableContainer\">\n        <table>\n            <thead>\n                <tr>\n                    <th>A</th>\n                    <th>Concepto</th>\n                    <th>Unidades</th>\n                    <th>Precio Unitario</th>\n                    <th>Total</th>\n                </tr>\n            </thead>\n            <tbody id=\"tBody\"></tbody>\n            <tfoot>\n                <tr>\n                    <th colspan=\"4\">Total:</th>\n                    <th id=\"total\"></th>\n                </tr>\n            </tfoot>\n        </table>\n        <div class=\"cartCloseButtonContainer\">\n            <button class=\"cartCloseButton\" onclick=\"closeCart()\">Finalizar Compra</button>\n        </div>\n    </div>\n";
}
exports.cartFile = cartFile;
function indexFile() {
    return /* html */ "\n        <header>\n            <h1>Furey's Lab</h1>\n            <h4>Soluciones Inteligentes</h4>\n        </header>\n        <article id=\"about-us\">\n            <h2>Sobre Nosotros</h2>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, fugiat aliquid. Est sint eligendi harum dolore. Ipsam accusantium earum doloribus dignissimos illo hic voluptatum harum ducimus totam? Obcaecati totam laudantium quidem velit hic voluptatibus ratione deleniti saepe ullam tenetur enim eveniet eligendi ea optio aliquid esse cumque, facilis repellat commodi.</p>\n        </article>\n        <article class=\"article-even\">\n            <h3>Calidad Garantizada</h3>\n            <h2>Nuestros Productos</h2>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vel, dolorem rem reiciendis cupiditate officia.</p>\n            <a class=\"shop-btn\" href=\"?htmlFileName=products\">Comprar Ahora</a>\n        </article>\n        <article class=\"contact\" id=\"contact\">\n            <div class=\"contact-card\">\n                <h2>Cont\u00E1ctanos</h2>\n                <form>\n                    <div class=\"input-group\">\n                        <h5>Nombre y Apellido:</h5>\n                        <input placeholder=\"Juan Perez \" />\n                    </div>\n                    <div class=\"input-group\">\n                        <h5>Correo Electr\u00F3nico:</h5>\n                        <input placeholder=\"example@example.com\" />\n                    </div>\n                    <div class=\"input-group\">\n                        <h5>Mensaje:</h5>\n                        <textarea style=\"width: 100%;\" rows=\"5\"></textarea>\n                    </div>\n                </form>\n            </div>\n        </article>\n    ";
}
exports.indexFile = indexFile;
function productsFile() {
    return __awaiter(this, void 0, void 0, function () {
        var page, products, innerHTML, index;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = Number((0, script_1.getSearch)().page) || 1;
                    return [4 /*yield*/, (0, api_1.getPosts)()];
                case 1:
                    products = _a.sent();
                    if (typeof products !== "string") {
                        innerHTML = "\n            <h1 class=\"products-header\">Productos</h1>\n            <div class=\"products\" id=\"products\">\n        ";
                        products.splice(0, (page - 1) * 10);
                        for (index = 0; index < 10; index++) {
                            innerHTML += UI_1.default.appendOnProducts(new Product_1.default("src/img/noprew-index.png", products[index].title, "", products[index].body.length * 20, {}, products[index].id));
                        }
                        return [2 /*return*/, innerHTML + ("\n            </div>\n            <div class=\"paginator\">\n                " + UI_1.default.appendOnPaginator(page) + "\n            </div>\n        ")];
                    }
                    else {
                        if (confirm("Ha ocurrido un ERROR")) {
                            window.history.back();
                        }
                        ;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.productsFile = productsFile;
function productFile() {
    return __awaiter(this, void 0, void 0, function () {
        var cod, product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cod = (0, script_1.getSearch)().cod;
                    return [4 /*yield*/, (0, api_1.getPost)(cod)];
                case 1:
                    product = _a.sent();
                    if (typeof product !== "string") {
                        return [2 /*return*/, "\n            <div class=\"product\">\n                " + UI_1.default.appendOnProduct(new Product_1.default("src/img/noprew-index.png", product.title, product.body, product.body.length * 20, {
                                "Caraterística 1": "Especificación 1",
                                "Caraterística 2": "Especificación 2",
                                "Caraterística 3": "Especificación 3",
                                "Caraterística 4": "Especificación 4",
                                "Caraterística 5": "Especificación 5"
                            }, product.id)) + "\n            </div>\n        "];
                    }
                    else {
                        if (confirm("Este Producto no existe"))
                            window.history.back();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.productFile = productFile;

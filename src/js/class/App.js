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
//  LISTENERES
var menuHandlerListener_1 = __importDefault(require("../listeners/menuHandlerListener"));
var searchsListener_1 = __importDefault(require("../listeners/searchsListener"));
var shopListener_1 = __importDefault(require("../listeners/shopListener"));
var paginatorListener_1 = __importDefault(require("../listeners/paginatorListener"));
var closeCartListener_1 = __importDefault(require("../listeners/closeCartListener"));
//  CLASSES
var API_1 = __importDefault(require("./API"));
var Catalog_1 = __importDefault(require("./Catalog"));
//  SCRIPTS
var updateQuantityProducts_1 = __importDefault(require("../scripts/updateQuantityProducts"));
var loadTable_1 = __importDefault(require("../scripts/loadTable"));
var App = /** @class */ (function () {
    function App(ui, cart, router) {
        this.ui = ui;
        this.cart = cart;
        this.router = router;
    }
    /**
     * Loads the required page and runs the respective listeners.
     */
    App.prototype.fileLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.runLoader()];
                    case 1:
                        _a.sent();
                        (0, updateQuantityProducts_1.default)(String(this.cart.getQuantityProducts()));
                        (0, menuHandlerListener_1.default)();
                        (0, searchsListener_1.default)();
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.runLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            var HTMLFileName;
            return __generator(this, function (_a) {
                HTMLFileName = this.router.getHTMLFileName();
                return [2 /*return*/, this[HTMLFileName + "Loader"]()];
            });
        });
    };
    /**
     * Loads Index.
     */
    App.prototype.indexLoader = function () {
        this.ui.index();
    };
    /**
     * Loads Product.
     */
    App.prototype.productLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            var productCod, apiResponse, product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productCod = this.router.getSearchURL().cod;
                        return [4 /*yield*/, API_1.default.getPost(productCod)];
                    case 1:
                        apiResponse = _a.sent();
                        if (!API_1.default.isApiError(apiResponse)) {
                            product = Catalog_1.default.convertProduct(apiResponse);
                            this.ui.product(product);
                            (0, shopListener_1.default)();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Loads Products.
     */
    App.prototype.productsLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, search, page, apiResponse, maxPage, products;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.router.getSearchURL(), search = _a.search, page = _a.page;
                        return [4 /*yield*/, API_1.default.getPosts(search)];
                    case 1:
                        apiResponse = _b.sent();
                        if (!API_1.default.isApiError(apiResponse)) {
                            maxPage = Math.ceil(apiResponse.length / 10);
                            products = Catalog_1.default.convertProducts(apiResponse, Number(page));
                            this.ui.products(products, Number(page), maxPage);
                            (0, shopListener_1.default)();
                            (0, paginatorListener_1.default)();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Loads Cart.
     */
    App.prototype.cartLoader = function () {
        this.ui.cart();
        (0, closeCartListener_1.default)();
        (0, loadTable_1.default)(this.cart);
    };
    /**
     * Loads 404.
     */
    App.prototype.errorLoader = function () {
        this.ui.error();
    };
    return App;
}());
exports.default = App;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//  LISTENERES
var menuHandlerListener_1 = __importDefault(require("../listeners/menuHandlerListener"));
var closeCartListener_1 = __importDefault(require("../listeners/closeCartListener"));
var paginatorListener_1 = __importDefault(require("../listeners/paginatorListener"));
var searchsListener_1 = __importDefault(require("../listeners/searchsListener"));
var shopListener_1 = __importDefault(require("../listeners/shopListener"));
//  CLASSES
var Favorites_1 = __importDefault(require("./Favorites"));
var Cart_1 = __importDefault(require("./Cart"));
var UI_1 = __importDefault(require("./UI"));
//  SCRIPTS
var updateQuantityProducts_1 = __importDefault(require("../scripts/updateQuantityProducts"));
var loadTable_1 = __importDefault(require("../scripts/loadTable"));
var config_1 = require("../config");
var App = /** @class */ (function () {
    function App(HTML_APP) {
        this.PREPARE = {
            products: "productsPrepare",
            product: "productPrepare",
            cart: "cartPrepare",
        };
        this.ui = new UI_1.default(HTML_APP);
        this.cart = new Cart_1.default();
        this.favorites = new Favorites_1.default();
    }
    /**
     * Loads and runs the needed listeners.
     */
    App.prototype.fileLoader = function () {
        var preparative = this.PREPARE[config_1.CURRENT_PAGE];
        if (preparative) {
            this[preparative]();
        }
        (0, updateQuantityProducts_1.default)(this.cart.getQuantityProducts());
        (0, menuHandlerListener_1.default)();
        (0, searchsListener_1.default)();
    };
    /**
     * Loads all listeners for Products.
     */
    App.prototype.productsPrepare = function () {
        (0, paginatorListener_1.default)();
        (0, shopListener_1.default)(this.cart);
    };
    /**
     * Loads all listeners for Product.
     */
    App.prototype.productPrepare = function () {
        (0, shopListener_1.default)(this.cart);
    };
    /**
     * Loads all listeners for Cart.
     */
    App.prototype.cartPrepare = function () {
        (0, closeCartListener_1.default)(this.cart);
        (0, loadTable_1.default)(this.cart);
    };
    return App;
}());
exports.default = App;

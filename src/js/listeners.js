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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listenToReduceIncreaseButtons = exports.listenToSearchs = exports.listenToShopButtons = exports.listenToPaginatorButtons = exports.listenToMenuHandlerButtons = exports.SEARCH_PAIR_INPUTS = void 0;
var api_1 = require("./api");
var script_1 = require("./script");
var config_1 = require("./config");
var searchProducts_1 = require("./searchProducts");
var products_1 = require("./products");
//  HTML
var MENU_HANDLERS_BUTTONS = document.getElementsByClassName("openNav-button");
var REMOVE_ONE_PRODUCT_BUTTON = document.getElementsByClassName("reduceOneButton");
var ADD_ONE_PRODUCT_BUTTON = document.getElementsByClassName("increaseOneButton");
var SHOP_BUTTONS = document.getElementsByClassName("shopButton");
var PAGINATOR_BUTTONS = document.getElementsByClassName("js-paginator");
var MENU_CONTAINER = document.getElementById("nav-container");
var SEARCH_BUTTON_S = document.getElementById("search-button-s");
var SEARCH_BUTTON = document.getElementById("search-button");
var SEARCH_INPUT_S = document.getElementById("search-input-s");
var SEARCH_INPUT = document.getElementById("search-input");
//  CSS CLASES
var MENU_CONTAINER_CLASS_SHOW = "active";
//  EVENTS
var MENU_HANDLERS_BUTTONS_EVENT = "click";
var SHOP_BUTTONS_EVENT = "click";
var SEARCH_BUTTON_S_EVENT = "click";
var SEARCH_BUTTON_EVENT = "click";
var SEARCH_INPUT_S_EVENT = "keyup";
var SEARCH_INPUT_EVENT = "keyup";
var REMOVE_ONE_PRODUCT_BUTTON_EVENT = "click";
var ADD_ONE_PRODUCT_BUTTON_EVENT = "click";
var PAGINATOR_BUTTONS_EVENT = "click";
//  GENERAL
var SEARCH_PAIR_INPUTS = {
    "search-button-s": SEARCH_INPUT_S,
    "search-button": SEARCH_INPUT
};
exports.SEARCH_PAIR_INPUTS = SEARCH_PAIR_INPUTS;
function listenToMenuHandlerButtons() {
    Array.from(MENU_HANDLERS_BUTTONS).forEach(function (button) {
        button.addEventListener(MENU_HANDLERS_BUTTONS_EVENT, function () {
            MENU_CONTAINER.classList.toggle(MENU_CONTAINER_CLASS_SHOW);
        });
    });
}
exports.listenToMenuHandlerButtons = listenToMenuHandlerButtons;
function listenToShopButtons() {
    var _this = this;
    Array.from(SHOP_BUTTONS).forEach(function (button) {
        button.addEventListener(SHOP_BUTTONS_EVENT, function (e) { return __awaiter(_this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(e.target instanceof HTMLElement)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, api_1.getPost)(e.target.dataset.cod)];
                    case 1:
                        product = _a.sent();
                        if (typeof product !== "string") {
                            config_1.CART.addToCart(product);
                            (0, script_1.updateQuantityProducts)(String(config_1.CART.getQuantityProducts()));
                        }
                        else {
                            alert("Ha ocurrido un error al añadir este producto al carrito");
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    });
}
exports.listenToShopButtons = listenToShopButtons;
function listenToSearchs() {
    SEARCH_INPUT_S.addEventListener(SEARCH_INPUT_S_EVENT, searchProducts_1.searchInputHandler);
    SEARCH_INPUT.addEventListener(SEARCH_INPUT_EVENT, searchProducts_1.searchInputHandler);
    SEARCH_BUTTON_S.addEventListener(SEARCH_BUTTON_S_EVENT, searchProducts_1.searchButtonHandler);
    SEARCH_BUTTON.addEventListener(SEARCH_BUTTON_EVENT, searchProducts_1.searchButtonHandler);
}
exports.listenToSearchs = listenToSearchs;
function listenToPaginatorButtons() {
    Array.from(PAGINATOR_BUTTONS).forEach(function (button) {
        button.addEventListener(PAGINATOR_BUTTONS_EVENT, products_1.sendWithSearchParam);
    });
}
exports.listenToPaginatorButtons = listenToPaginatorButtons;
function listenToReduceIncreaseButtons(callback) {
    Array.from(REMOVE_ONE_PRODUCT_BUTTON).forEach(function (reduceOneButton) {
        reduceOneButton.addEventListener(REMOVE_ONE_PRODUCT_BUTTON_EVENT, function (e) {
            config_1.CART.removeFromCart(e.target.parentElement.nextElementSibling.innerHTML);
            callback();
        });
    });
    Array.from(ADD_ONE_PRODUCT_BUTTON).forEach(function (increaseOneButton) {
        increaseOneButton.addEventListener(ADD_ONE_PRODUCT_BUTTON_EVENT, function (e) {
            config_1.CART.lastMomentAppendToCart(e.target.parentElement.nextElementSibling.innerHTML);
            callback();
        });
    });
}
exports.listenToReduceIncreaseButtons = listenToReduceIncreaseButtons;

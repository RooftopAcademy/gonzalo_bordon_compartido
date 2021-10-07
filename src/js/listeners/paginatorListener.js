"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __importDefault(require("../main"));
//  HTML
var PAGINATOR_BUTTONS = document.getElementsByClassName("js-paginator");
//  EVENTS
var PAGINATOR_BUTTONS_EVENT = "click";
function paginatorListener() {
    Array.from(PAGINATOR_BUTTONS).forEach(function (button) {
        button.addEventListener(PAGINATOR_BUTTONS_EVENT, sendWithSearchParam);
    });
}
exports.default = paginatorListener;
function sendWithSearchParam(e) {
    main_1.default.router.setSearchURL({
        "htmlFileName": "products",
        "page": e.target.dataset.page,
        "search": main_1.default.router.getSearchURL().search
    });
    main_1.default.router.navigateSearchURL();
}

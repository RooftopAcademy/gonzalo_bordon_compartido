"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Router_1 = __importDefault(require("../class/Router"));
//  HTML
var PAGINATOR_BUTTONS = document.getElementsByClassName("js-paginator");
//  EVENTS
var PAGINATOR_BUTTONS_EVENT = "click";
function paginatorListener() {
    Array.from(PAGINATOR_BUTTONS).forEach(function (button) {
        button.addEventListener(PAGINATOR_BUTTONS_EVENT, function (e) {
            var page = e.target.dataset.page;
            Router_1.default.followWithCurrentParams("/products/" + page);
        });
    });
}
exports.default = paginatorListener;

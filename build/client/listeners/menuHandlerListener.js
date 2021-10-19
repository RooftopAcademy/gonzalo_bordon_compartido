"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  HTML
var MENU_HANDLERS_BUTTONS = document.getElementsByClassName("openNav-button");
var MENU_CONTAINER = document.getElementById("nav-container");
//  CSS CLASES
var MENU_CONTAINER_CLASS_SHOW = "active";
//  EVENTS
var MENU_HANDLERS_BUTTONS_EVENT = "click";
function menuHandlerListener() {
    Array.from(MENU_HANDLERS_BUTTONS).forEach(function (button) {
        button.addEventListener(MENU_HANDLERS_BUTTONS_EVENT, function () {
            MENU_CONTAINER.classList.toggle(MENU_CONTAINER_CLASS_SHOW);
        });
    });
}
exports.default = menuHandlerListener;

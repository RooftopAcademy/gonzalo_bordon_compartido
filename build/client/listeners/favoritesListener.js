"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __importDefault(require("../main"));
//  HTML
var FAVORITES_ICONS = document.getElementsByClassName("favorites-icon");
//  EVENTS
var SEARCH_INPUT_S_EVENT = "keyup";
function favoritesListener() {
    Array.from(FAVORITES_ICONS).forEach(function (favorites_icon) {
        favorites_icon.addEventListener(SEARCH_INPUT_S_EVENT, function (e) {
            if (!main_1.default.users.isLogued()) {
                return alert("Necesitas estar Logueado!");
            }
            var productID = +favorites_icon.dataset.id;
            main_1.default.favorites.handleFavorite(productID);
        });
    });
}
exports.default = favoritesListener;

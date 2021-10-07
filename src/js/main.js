"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __importDefault(require("./class/App"));
var Cart_1 = __importDefault(require("./class/Cart"));
var Router_1 = __importDefault(require("./class/Router"));
var UI_1 = __importDefault(require("./class/UI"));
var HTML_APP = document.getElementById("app");
var router = new Router_1.default();
var cart = new Cart_1.default();
var ui = new UI_1.default(HTML_APP);
var app = new App_1.default(ui, cart, router);
app.fileLoader();
exports.default = app;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __importDefault(require("./class/App"));
var HTML_APP = document.getElementById("app");
var app = new App_1.default(HTML_APP);
app.fileLoader();
exports.default = app;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Router_1 = __importDefault(require("../class/Router"));
//import { CURRENT_PAGE } from "../config";
function sendSearchRequest(input) {
    //if (CURRENT_PAGE !== "products") {
    return Router_1.default.followWithParams("/products", {
        "search": input.value
    });
    //}
}
exports.default = sendSearchRequest;

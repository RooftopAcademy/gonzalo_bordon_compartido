"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __importDefault(require("../main"));
function sendSearchRequest(input) {
    main_1.default.router.setSearchURL({
        "htmlFileName": "products",
        "search": input.value
    });
}
exports.default = sendSearchRequest;

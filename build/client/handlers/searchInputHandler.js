"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sendSearchRequest_1 = __importDefault(require("../scripts/sendSearchRequest"));
function searchInputHandler(e) {
    if (e.keyCode === 13) {
        (0, sendSearchRequest_1.default)(e.target);
    }
}
exports.default = searchInputHandler;

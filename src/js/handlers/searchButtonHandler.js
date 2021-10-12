"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var sendSearchRequest_1 = __importDefault(require("../scripts/sendSearchRequest"));
function searchButtonHandler(e) {
    var BUTTON = e.target;
    (0, sendSearchRequest_1.default)(config_1.SEARCH_PAIR_INPUTS[BUTTON.id]);
}
exports.default = searchButtonHandler;

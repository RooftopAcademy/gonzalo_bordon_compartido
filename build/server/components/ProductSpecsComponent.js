"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProductSpecComponent_1 = __importDefault(require("./ProductSpecComponent"));
function ProductSpecsComponent(caracts) {
    return Object.entries(caracts)
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return (0, ProductSpecComponent_1.default)(key, value);
    })
        .join("");
}
exports.default = ProductSpecsComponent;

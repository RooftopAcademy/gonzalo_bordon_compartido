"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __importDefault(require("../main"));
var loadTable_1 = __importDefault(require("./loadTable"));
/**
 * Close the Cart.
 */
function closeCart() {
    main_1.default.cart.close();
    (0, loadTable_1.default)();
}

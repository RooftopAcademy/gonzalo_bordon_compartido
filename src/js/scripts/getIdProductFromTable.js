"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getIdProductFromTable(e) {
    var stringID = e.target.parentElement.dataset.productId;
    return Number(stringID);
}
exports.default = getIdProductFromTable;

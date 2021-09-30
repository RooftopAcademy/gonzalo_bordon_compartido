"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWithSearchParam = void 0;
var script_1 = require("./script");
function sendWithSearchParam(e) {
    (0, script_1.setSearchURL)({
        "htmlFileName": "products",
        "page": e.target.dataset.page,
        "search": (0, script_1.getSearchURL)().search
    });
}
exports.sendWithSearchParam = sendWithSearchParam;

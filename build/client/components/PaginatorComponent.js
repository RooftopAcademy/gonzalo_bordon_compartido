"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function PaginatorComponenet(page, maxPage, positions) {
    var left = positions.left, center = positions.center, right = positions.right;
    return "\n        " + createExteriorPaginator(1, "<<", maxPage, (page >= 3)) + "\n        " + createMidPaginator(left, maxPage, page) + "\n        " + createMidPaginator(center, maxPage, page) + "\n        " + createMidPaginator(right, maxPage, page) + "\n        " + createExteriorPaginator(maxPage, ">>", maxPage, (page <= maxPage)) + "\n    ";
}
exports.default = PaginatorComponenet;
function createMidPaginator(thisPage, maxPage, currentPage) {
    return (thisPage > 0 && thisPage <= maxPage)
        ? "\n            <a class=\"js-paginator " + ((thisPage === currentPage) ? "active" : "") + "\" data-page=\"" + thisPage + "\">\n                " + thisPage + "\n            </a>\n        "
        : "";
}
function createExteriorPaginator(thisPage, content, maxPage, condition) {
    return (condition && maxPage > 3)
        ? "\n            <a class=\"js-paginator\" data-page=\"" + thisPage + "\">\n                " + content + "\n            </a>\n        "
        : "";
}

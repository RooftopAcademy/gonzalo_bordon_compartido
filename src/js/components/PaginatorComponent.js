"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function PaginatorComponenet(page, maxPage, positions) {
    var left = positions.left, center = positions.center, right = positions.right;
    return "\n        " + ((page >= 3 && maxPage > 3) ? createExteriorPaginator(1, "<<") : "") + "\n        " + createMidPaginator(left, maxPage, page) + "\n        " + createMidPaginator(center, maxPage, page) + "\n        " + createMidPaginator(right, maxPage, page) + "\n        " + ((page <= 8 && maxPage > 3) ? createExteriorPaginator(maxPage, ">>") : "") + "\n    ";
}
exports.default = PaginatorComponenet;
function createMidPaginator(thisPage, maxPage, currentPage) {
    return (thisPage > 0 && thisPage <= maxPage)
        ? "\n        <a class=\"js-paginator " + ((thisPage === currentPage) ? "active" : "") + "\" data-page=\"" + thisPage + "\">\n            " + thisPage + "\n        </a>\n    "
        : "";
}
function createExteriorPaginator(thisPage, content) {
    return "\n        <a class=\"js-paginator\" data-page=\"" + thisPage + "\">\n            " + content + "\n        </a>\n    ";
}

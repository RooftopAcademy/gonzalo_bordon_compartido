"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function PaginatorComponenet(page, maxPage) {
    var left = page - 1;
    var center = page;
    var right = page + 1;
    if (page === 1) {
        ++left;
        ++center;
        ++right;
    }
    else if (page === maxPage) {
        --left;
        --center;
        --right;
    }
    return "\n    " + exteriorPaginator(1, maxPage, "<<", page > 2) + "\n    " + midPaginator(left, maxPage, page) + "\n    " + midPaginator(center, maxPage, page) + "\n    " + midPaginator(right, maxPage, page) + "\n    " + exteriorPaginator(maxPage, maxPage, ">>", page < (maxPage - 1)) + "\n  ";
}
exports.default = PaginatorComponenet;
function midPaginator(redirectPage, maxPage, currentPage) {
    return redirectPage > 0 && redirectPage <= maxPage
        ? "\n    <a class=\"js-paginator " + (redirectPage === currentPage ? "active" : "") + "\" data-page=\"" + redirectPage + "\">\n      " + redirectPage + "\n    </a>\n  "
        : "";
}
function exteriorPaginator(redirectPage, maxPage, content, condition) {
    return condition && maxPage > 3
        ? "\n    <a class=\"js-paginator\" data-page=\"" + redirectPage + "\">\n      " + content + "\n    </a>\n  "
        : "";
}

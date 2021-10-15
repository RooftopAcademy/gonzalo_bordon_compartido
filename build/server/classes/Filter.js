"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Filter = /** @class */ (function () {
    function Filter() {
    }
    Filter.prototype.inRange = function (elem, min, max) {
        if (min === void 0) { min = null; }
        if (max === void 0) { max = null; }
        return (min ? elem >= min : true) && (max ? elem <= max : true);
    };
    return Filter;
}());
exports.default = Filter;

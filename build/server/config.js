"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_DIR = exports.PUBLIC_DIR = void 0;
var path = require('path');
var ROOT_PATH = [__dirname, '..', '..'];
var ROOT = path.join.apply(path, ROOT_PATH);
var PUBLIC_DIR = path.join.apply(path, __spreadArray(__spreadArray([], ROOT_PATH, false), ['public'], false));
exports.PUBLIC_DIR = PUBLIC_DIR;
var DATABASE_DIR = path.join.apply(path, __spreadArray(__spreadArray([], ROOT_PATH, false), ['database'], false));
exports.DATABASE_DIR = DATABASE_DIR;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Storage = /** @class */ (function () {
    function Storage(storageName, storageObject) {
        this.storageName = storageName;
        if (!sessionStorage.getItem(storageName)) {
            sessionStorage.setItem(storageName, JSON.stringify(storageObject));
        }
    }
    Storage.prototype.updateStorage = function (storageObject) {
        sessionStorage.setItem(this.storageName, JSON.stringify(storageObject));
    };
    Storage.prototype.deleteStorage = function () {
        sessionStorage.removeItem(this.storageName);
    };
    Storage.prototype.getStorage = function () {
        return JSON.parse(sessionStorage.getItem(this.storageName));
    };
    return Storage;
}());
exports.default = Storage;

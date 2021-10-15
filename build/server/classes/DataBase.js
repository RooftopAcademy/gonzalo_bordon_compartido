"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Filter_1 = __importDefault(require("./Filter"));
var fs = require("fs");
var DATABASE_DIR = require("../config").DATABASE_DIR;
var DataBase = /** @class */ (function (_super) {
    __extends(DataBase, _super);
    function DataBase(tableName) {
        var _this = _super.call(this) || this;
        _this.tableNames = ["config", "products", "users", "favorites"];
        _this.table = _this.returnTable(tableName);
        return _this;
    }
    DataBase.prototype.getTable = function () {
        return this.table;
    };
    DataBase.prototype.setTable = function (tableName, tableData) {
        fs.writeFileSync(this.getTablePath(tableName), JSON.stringify(tableData));
    };
    DataBase.prototype.returnTable = function (tableName) {
        if (this.tableNames.includes(tableName)) {
            return JSON.parse(fs.readFileSync(this.getTablePath(tableName), "utf8"));
        }
    };
    DataBase.prototype.getConfig = function (configEntry) {
        return this.returnConfig()[configEntry];
    };
    DataBase.prototype.setConfig = function (configEntry, configData) {
        var config = this.returnConfig();
        config[configEntry] = configData;
        this.setTable("config", config);
    };
    DataBase.prototype.getTablePath = function (tableName) {
        return DATABASE_DIR + "/" + tableName + ".json";
    };
    DataBase.prototype.returnConfig = function () {
        return this.returnTable(this.getTablePath("config"));
    };
    return DataBase;
}(Filter_1.default));
exports.default = DataBase;

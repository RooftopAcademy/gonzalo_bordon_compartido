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
var DataBase_1 = __importDefault(require("./DataBase"));
var UsersAPI = /** @class */ (function (_super) {
    __extends(UsersAPI, _super);
    function UsersAPI(req) {
        var _this = _super.call(this, "users") || this;
        _this.body = {};
        _this.body = req.body;
        _this.users = _this.getTable();
        return _this;
    }
    UsersAPI.prototype.getUser = function (email) {
        return this.users.find(function (user) { return user.email === email; });
    };
    UsersAPI.prototype.existUser = function (email) {
        return !!this.getUser(email);
    };
    UsersAPI.prototype.setUser = function () {
        var _a = this.body, email = _a.email, password = _a.password;
        if (this.existUser(email)) {
            return;
        }
        var config = this.getConfig("users");
        config.maxID += 1;
        this.setConfig("users", config);
        this.users.push({
            email: email,
            password: password,
            id: config.maxID,
        });
        return config.maxID;
    };
    UsersAPI.prototype.validateUser = function () {
        console.log(this.body);
        var _a = this.body, email = _a.email, password = _a.password;
        var user = this.getUser(email);
        if (user && user.password === password) {
            return user.id;
        }
    };
    return UsersAPI;
}(DataBase_1.default));
exports.default = UsersAPI;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UsersAPI_1 = __importDefault(require("../classes/UsersAPI"));
module.exports = function usersPost(req, res) {
    var idUser = new UsersAPI_1.default(req).setUser();
    if (idUser) {
        return res.json({
            id: idUser,
        });
    }
    res.status(401).send({
        message: "Usuario Existente",
    });
};

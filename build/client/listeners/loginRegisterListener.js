"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loginHandler_1 = __importDefault(require("../handlers/loginHandler"));
var registerHandler_1 = __importDefault(require("../handlers/registerHandler"));
//  HTML
var LOGIN_FORM_BTN = document.getElementById("js-loginFormBTN");
var REGISTER_FORM = document.getElementById("js-registerForm");
//  EVENTS
var REGISTER_FORM_BTN_EVENT = "click";
var LOGIN_FORM_BTN_EVENT = "click";
function loginRegisterListener() {
    LOGIN_FORM_BTN.addEventListener(LOGIN_FORM_BTN_EVENT, loginHandler_1.default);
    REGISTER_FORM.addEventListener(REGISTER_FORM_BTN_EVENT, registerHandler_1.default);
}
exports.default = loginRegisterListener;

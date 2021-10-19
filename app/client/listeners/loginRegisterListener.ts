import loginHandler from "../handlers/loginHandler";
import registerHandler from "../handlers/registerHandler";

//  HTML
const LOGIN_FORM_BTN: HTMLElement = document.getElementById("js-loginFormBTN");
const REGISTER_FORM: HTMLElement = document.getElementById("js-registerForm");

//  EVENTS
const REGISTER_FORM_BTN_EVENT: string = "click";
const LOGIN_FORM_BTN_EVENT: string = "click";

export default function loginRegisterListener(): void {
  LOGIN_FORM_BTN.addEventListener(LOGIN_FORM_BTN_EVENT, loginHandler);
  REGISTER_FORM.addEventListener(REGISTER_FORM_BTN_EVENT, registerHandler);
}
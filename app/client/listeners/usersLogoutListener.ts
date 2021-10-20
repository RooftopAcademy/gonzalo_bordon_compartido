import Router from "../class/Router";
import Users from "../class/Users";

//  HTML
const USER_LOGOUT_BTN: HTMLElement = document.getElementById("user-logout");

//  EVENTS
const USER_LOGOUT_BTN_EVENT: string = "click";

export default function usersLogoutListener(users: Users): void {
  USER_LOGOUT_BTN.addEventListener(USER_LOGOUT_BTN_EVENT, (): void => {
    users.logoutUser();
    Router.follow("/users");
  });
}

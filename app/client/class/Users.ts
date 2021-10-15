import User from "../interfaces/User";

import API from "./API";
import Router from "./Router";
import Storage from "./Storage";

export default class Users extends Storage<User> {
  constructor() {
    super("user", {
      id: null,
      email: "",
      password: "",
    });
  }

  public async loginUser(email: string, password: string): Promise<void | string> {
    const response = await API.fetchAPI(Router.createURL("/users"), { email, password });
    if (API.isApiError(response)) {
      return response.message
    }
    this.updateStorage({
      id: response.id,
      email,
      password
    })
  }

  public async registerUser(email: string, password: string): Promise<void | string> {
    const response = await API.fetchAPI(Router.createURL("/users"), { email, password }, "PUT");
    if (API.isApiError(response)) {
      return response.message
    }
    this.updateStorage({
      id: response.id,
      email,
      password
    })
  }

  public isLogued(): boolean {
    return !!this.getStorage().id;
  }
}

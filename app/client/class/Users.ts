import API from "./API";
import Router from "./Router";
import UsersStorage from "./UsersStorage";

export default class Users extends UsersStorage {
  constructor() {
    super();
  }

  public async loginUser(email: string, password: string): Promise<void | string> {
    const response = await API.fetchAPI(Router.createURL("/users"), { email, password });
    if (API.isApiError(response)) {
      return "Credenciales Inválidas";
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
      return "El usuario ya existe."
    }
    this.updateStorage({
      id: response.id,
      email,
      password
    })
  }

  public logoutUser(): void {
    this.updateStorage({
      id: null,
      email: "",
      password: "",
    });
  }

  public getEmail() {
    return super.getEmail();
  }

  public getUser() {
    return super.getUser();
  }

  public isLogued() {
    return super.isLogued();
  }
}

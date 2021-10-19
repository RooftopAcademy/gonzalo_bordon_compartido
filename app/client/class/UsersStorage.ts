import User from "../interfaces/User";

import Storage from "./Storage";

export default class UsersStorage extends Storage<User> {
  constructor() {
    super("user", {
      id: null,
      email: "",
      password: "",
    });
  }

  protected getUser(): number {
    return +this.getStorage().id;
  }

  protected getEmail(): string {
    return this.getStorage().email;
  }

  protected isLogued(): boolean {
    return !!this.getStorage().id;
  }
}

import User from "../interfaces/User";
import DataBase from "./DataBase";

export default class UsersAPI extends DataBase {
  private body: any = {};
  private users: User[];

  constructor(req: any) {
    super("users");
    this.body = req.body;
    this.users = this.getTable();
  }

  private getUser(email: string): User {
    return this.users.find((user: User) => user.email === email);
  }

  private existUser(email: string): boolean {
    return !!this.getUser(email);
  }

  public setUser(): number | null {
    const { email, password } = this.body;

    if (this.existUser(email)) {
      return;
    }
    
    const config = this.getConfig("users");
    config.maxID += 1;
    this.setConfig("users", config);

    this.users.push({
      email,
      password,
      id: config.maxID,
    });

    return config.maxID;
  }

  public validateUser(): number | null {
    const { email, password } = this.body;
    const user: User = this.getUser(email);
    if (user && user.password === password) {
      return user.id;
    }
  }
}

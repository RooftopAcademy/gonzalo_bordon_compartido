import Filter from "./Filter";

const fs = require("fs");

const { DATABASE_DIR } = require("../config");

export default class DataBase extends Filter {
  private table: string;
  private readonly tableNames = ["config", "products", "users", "favorites"];

  constructor(tableName: string) {
    super();
    this.table = this.returnTable(tableName);
  }

  protected getTable(): any {
    return this.table;
  }

  protected setTable(tableName: string, tableData: any): void {
    fs.writeFileSync(this.getTablePath(tableName), JSON.stringify(tableData));
  }

  protected returnTable(tableName: string): any {
    if (this.tableNames.includes(tableName)) {
      return JSON.parse(fs.readFileSync(this.getTablePath(tableName), "utf8"));
    }
  }

  protected getConfig(configEntry: string): any {
    return this.returnConfig()[configEntry];
  }

  protected setConfig(configEntry: string, configData: any): void {
    const config = this.returnConfig();
    config[configEntry] = configData;
    this.setTable("config", config);
  }

  private getTablePath(tableName: string): string {
    return `${DATABASE_DIR}/${tableName}.json`;
  }

  private returnConfig(): any {
    return this.returnTable("config");
  }
}

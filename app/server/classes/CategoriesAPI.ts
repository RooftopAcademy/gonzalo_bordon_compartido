import Category from "../interfaces/Category";

import DataBase from "./DataBase";

export default class Categories extends DataBase {
  private categories: Category[] = [];

  constructor() {
    super("categories");
    this.categories = this.getTable();
  }

  public getCategories(): Category[] {
    return this.categories;
  }

  public getCategoriesList(): string[] {
    return this.categories.map((categoryEntry) => categoryEntry.category);
  }

  public setCategoriesByID(IDList: string[]): void {
    const categories: Category[] = this.categories.filter((categoryEntry) =>
      IDList.includes(categoryEntry.id)
    );

    if (!!categories) {
      this.categories = categories;
    }
  }

  public isInCategories(productCategory: string): boolean {
    const exist: Category = this.categories.find(
      (categoryEntry) => productCategory === categoryEntry.category
    );

    return !!exist;
  }

  public hasCategories(): boolean {
    return this.categories.length !== 0;
  }
}

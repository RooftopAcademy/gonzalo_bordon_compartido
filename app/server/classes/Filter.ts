import Categories from "./CategoriesAPI";

export default class Filter {
  protected inRange(
    elem: number,
    min: number = null,
    max: number = null
  ): boolean {
    return (min ? elem >= min : true) && (max ? elem <= max : true);
  }

  protected inStock(productStock: number, stock: number = null): boolean {
    if (!stock) {
      return true;
    }
    return productStock !== 0;
  }

  protected inCategories(
    productCategory: string,
    categoriesList: string[] = null
  ): boolean {
    if (categoriesList.length !== 0) {
      return categoriesList.includes(productCategory);
    }

    return true;
  }
}

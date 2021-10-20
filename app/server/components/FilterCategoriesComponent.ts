import Category from "../interfaces/Category";

import { htmlString } from "../types/html";

import Categories from "../classes/CategoriesAPI";

import FilterCategoryComponent from "./FilterCategoryComponent";

export default function FilterCategoriesComponent(): htmlString {
  const categories = new Categories()
  return categories.getCategories().map((category: Category) =>
    FilterCategoryComponent(category)
  ).join("");
}

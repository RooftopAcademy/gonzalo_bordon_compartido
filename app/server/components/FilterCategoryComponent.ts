import Category from "../interfaces/Category";

export default function FilterCategoryComponent({
  category,
  id,
}: Category): string {
  return /* html */ `
      <div class="filter-category">
        <input type="checkbox" name="categories" value="${id}">${category}
      </div>
    `;
}

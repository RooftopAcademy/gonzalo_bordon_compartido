import Router from "../class/Router";

//  HTML
const FILTER_STOCK: HTMLInputElement = document.getElementById(
  "filter-stock"
) as HTMLInputElement;

const FILTER_MIN: HTMLInputElement = document.getElementById(
  "filter-min"
) as HTMLInputElement;

const FILTER_MAX: HTMLInputElement = document.getElementById(
  "filter-max"
) as HTMLInputElement;

const FILTER_CATEGORIES = document.querySelectorAll(
  "input[name=categories]"
) as NodeListOf<HTMLInputElement>;

export default function filterHandler(): void {
  const max = FILTER_MAX.value;
  const min = FILTER_MIN.value;
  const stock = (FILTER_STOCK.checked) ? 1 : 0;
  const categories: string[] = [];

  FILTER_CATEGORIES.forEach((filterCategory) => {
    if (filterCategory.checked) {
      categories.push(filterCategory.value);
    }
  });

  const query = Router.parseQuery();

  query["max"] = max;
  query["min"] = min;
  query["stock"] = stock;
  query["categories"] = categories;

  Router.followWithQuery("/products", query);
}

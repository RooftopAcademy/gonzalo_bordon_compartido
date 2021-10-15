import { htmlString } from "../types/html";

import ProductSpecComponent from "./ProductSpecComponent";

export default function ProductSpecsComponent(caracts: {
  [index: string]: string;
}): htmlString {
  return Object.entries(caracts)
    .map(([key, value]): string => ProductSpecComponent(key, value))
    .join("");
}

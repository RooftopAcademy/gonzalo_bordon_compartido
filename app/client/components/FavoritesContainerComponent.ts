import Product from "../interfaces/Product";

import { htmlString } from "../types/html";

import FavoritesCardComponent from "./FavoritesCardComponent";

export default function FavoritesContainerComponent(
    products: Product[]
): htmlString {
    return products
        .map((product: Product): string => FavoritesCardComponent(product))
        .join("");
}
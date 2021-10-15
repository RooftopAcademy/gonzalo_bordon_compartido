import Product from "../interfaces/Product";

import { htmlString } from "../../client/types/html";

import FavoritesEntryComponent from "./FavoritesEntryComponent";

export default function FavoritesTableComponent(
    products: Product[]
): htmlString {
    return products
        .map((product: Product): string => FavoritesEntryComponent(product))
        .join("");
}
import { QUANTITY_PRODUCTS_INDICATOR } from "../config";

export default function updateQuantityProducts(
    q: number
): void { 
    QUANTITY_PRODUCTS_INDICATOR.innerHTML = String(q); 
}
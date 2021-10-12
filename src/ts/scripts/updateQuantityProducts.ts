import { QUANTITY_PRODUCTS_INDICATOR } from "../config";

export default function updateQuantityProducts(
    q: string
): void { 
    QUANTITY_PRODUCTS_INDICATOR.innerHTML = q; 
}
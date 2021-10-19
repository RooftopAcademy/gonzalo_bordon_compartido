import CartProduct from "../interfaces/CartProduct";

import { htmlString } from "../types/html";

import CartEntryComponent from "./CartEntryComponent";

export default function CartTableComponent(products: CartProduct[]): {
  total: number;
  CartTable: htmlString;
} {
  let total = 0;
  const CartTable = Object.values(products)
    .map((product: CartProduct): string => {
      total += product.total;
      return CartEntryComponent(product);
    })
    .join("");
    
  return { CartTable, total };
}

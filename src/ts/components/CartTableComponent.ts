import CartProduct from "../interfaces/CartProduct";

import { htmlString } from "../types/html";
import { cartStructureProducts } from "../types/cart";

import CartEntryComponent from "./CartEntryComponent";

export default function CartTableComponent(
    products: cartStructureProducts
) {
    let innerHTML: htmlString = "";

    Object.values(products).forEach((product: CartProduct): void => {
        innerHTML += CartEntryComponent( product );
    })

    return innerHTML;
}
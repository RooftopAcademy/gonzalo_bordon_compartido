import { cartProductsList } from "../types/cart";

export default interface CartStructure {
    products: cartProductsList,
    quantityProducts: number
}
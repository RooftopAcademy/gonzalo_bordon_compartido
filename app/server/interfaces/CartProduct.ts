import BasicProduct from "./BasicProduct";

export default interface CartProduct extends BasicProduct {
    units: number,
    total: number,
}
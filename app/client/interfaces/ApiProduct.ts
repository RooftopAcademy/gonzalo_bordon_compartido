import BasicProduct from "./BasicProduct";

export default interface ApiProduct extends BasicProduct { 
    userId: number,
    body: string
}
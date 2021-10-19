import BasicProduct from "./BasicProduct";

export default interface Product extends BasicProduct {
    body: string;
    image: string; 
    category: string;
    caracts: {
        [index: string]: string
    }; 
}
export default interface Product {
    image : string; 
    title : string; 
    desc : string; 
    price : number; 
    caracts : {
        [index: string]: string
    }; 
    cod : string | number;
}
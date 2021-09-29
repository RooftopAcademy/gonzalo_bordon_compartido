//  INTERFACES
interface jsonProduct {
    id: number, 
    units: number,
    total: number,
    price: number
}

interface searchData {
    htmlFileName: htmlFileName,
    page: string,
    cod: string
}

interface cartProducts {
    [index: string]: jsonProduct
}

interface cartStructure {
    products: cartProducts,
    quantityProducts: number
}

interface responseProduct { 
    title: string,
    body: string,
    id: number,
    userId: number
}

type htmlFileLoaders = {
    cart: () => string;
    product: () => Promise<string | void>;
    products: () => Promise<string | void>;
    index: () => string;
}

type responseToCart = { 
    body?: string, 
    extra?: string, 
    error?: string
}

//  API Types
type apiError = "ERROR";
type apiURL = string;

//
type htmlFileName = "index" | "cart" | "product" | "products";

export {
    jsonProduct,
    searchData,
    cartStructure,
    cartProducts,
    responseProduct,
    htmlFileLoaders,
    responseToCart,
    //API
    apiError,
    apiURL,
    //GENERAL
    htmlFileName
}
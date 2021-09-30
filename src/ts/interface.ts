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
    cod: string,
    search: string
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

//  SEARCH Types
type searchDataToSet = {
    htmlFileName?: htmlFileName,
    page?: string,
    cod?: string,
    search?: string
}
type searchParam = "htmlFileName" | "page" | "cod" | "search";

//  API Types
type apiError = "ERROR";
type apiURL = string;

//  HTML Types
type htmlFileName = "index" | "cart" | "product" | "products";

export {
    jsonProduct,
    searchData,
    searchParam,
    searchDataToSet,
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
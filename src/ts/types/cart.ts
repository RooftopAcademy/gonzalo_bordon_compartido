import CartProduct from "../interfaces/CartProduct"

type responseToCart = { 
    body?: string, 
    extra?: string, 
    error?: string
}

type cartStructureProducts = {
    [id: number]: CartProduct
}

export {
    responseToCart,
    cartStructureProducts
} 
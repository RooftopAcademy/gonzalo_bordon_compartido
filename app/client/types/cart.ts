type responseToCart = { 
    body?: string, 
    extra?: string, 
    error?: string
}

type cartProductsList = {
    [id: number]: number
}

export {
    responseToCart,
    cartProductsList
} 
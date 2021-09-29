interface jsonProduct {
    id: number, 
    units: number,
    total: number,
    price: number
}

interface cartProducts {
    [index : string] : jsonProduct
}

class Cart {
    _jsonCart: cartProducts;
    _quantityProducts: number

    constructor() {
        const cart : string = sessionStorage.getItem("cart");
        this._jsonCart = {};
        this._quantityProducts = 0
        if (!cart) sessionStorage.setItem("cart", "{}");
        else {
            this._jsonCart = JSON.parse(cart);
            for (const productIndex of Object.keys(this._jsonCart)) this._quantityProducts += this._jsonCart[productIndex].units;
        };
    }

    addToCart(product : responseProduct | apiError ) : void {
        if (typeof product !== "string" ) {
            if (!this._jsonCart[product.title]) {
                this._jsonCart[product.title] = {
                    id: product.id,
                    price: product.body.length * 20,
                    total: product.body.length * 20,
                    units: 1
                };
            } else {
                this._jsonCart[product.title].units += 1;
                this._jsonCart[product.title].total += product.body.length * 20;
            };
    
            this._quantityProducts += 1;
            
            sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
        }
    }

    removeFromCart(concept : string) : void {
        if (this._jsonCart[concept].units === 1) delete this._jsonCart[concept];
        else {
            this._jsonCart[concept].units -= 1
            this._jsonCart[concept].total -= this._jsonCart[concept].price
        }

        this._quantityProducts -= 1;
        
        sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
    }

    lastMomentAppendToCart(concept : string) : void { 
        this._jsonCart[concept].units += 1; 
        this._jsonCart[concept].total += this._jsonCart[concept].price
        
        this._quantityProducts += 1;
        
        sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
    }

    close() : void {
        sessionStorage.removeItem("cart");
        this._jsonCart = {};
        this._quantityProducts = 0;
        alert("Imagina que la compra finalizó");
    }

    getProducts() : cartProducts { return this._jsonCart }

    getQuantityProducts() : number { return this._quantityProducts }
}
/* 
type apiProduct = { 
    title: string, 
    body: string, 
    id: number, 
    userId: number,
    error?: boolean
}
*/

class Cart {
    constructor() /* : Void */ {
        const cart /* : string */ = sessionStorage.getItem("cart");
        this._jsonCart /* : object */ = {};
        this._quantityProducts /* : number */ = 0
        if (!cart) sessionStorage.setItem("cart", "{}");
        else {
            this._jsonCart = JSON.parse(cart);
            for (const product of Object.values(this._jsonCart)) this._quantityProducts += product.units;
        };
    }

    async addToCart(productID /* : string | number */ ) /* : Void */ {
        const product /* : apiProduct */ = await getPosts(productID);
        if (!this._jsonCart[product.title]) {
            this._jsonCart[product.title] = {};
            this._jsonCart[product.title].id = product.id;
            this._jsonCart[product.title].price = product.body.length * 20;
            this._jsonCart[product.title].total = product.body.length * 20;
            this._jsonCart[product.title].units = 1;
        } else {
            this._jsonCart[product.title].units += 1;
            this._jsonCart[product.title].total += product.body.length * 20;
        };

        this._quantityProducts += 1;
        
        sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
    }

    removeFromCart(concept /* : string */ ) /* : Void */ {
        if (this._jsonCart[concept].units === 1) delete this._jsonCart[concept];
        else {
            this._jsonCart[concept].units -= 1
            this._jsonCart[concept].total -= this._jsonCart[concept].price
        }

        this._quantityProducts -= 1;
        
        sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
    }

    lastMomentAppendToCart(concept /* : string */ ) /* : Void */ { 
        this._jsonCart[concept].units += 1; 
        this._jsonCart[concept].total += this._jsonCart[concept].price
        
        this._quantityProducts += 1;
        
        sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
    }

    close() /* : Void */ {
        sessionStorage.removeItem("cart");
        this._jsonCart = {};
        this._quantityProducts = 0;
        alert("Imagina que la compra finalizó");
    }

    getProducts() /* : object */ { return this._jsonCart }

    getQuantityProducts() /* : number */ { return this._quantityProducts }
}
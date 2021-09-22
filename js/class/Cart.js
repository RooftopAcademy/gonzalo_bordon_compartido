class Cart {
    constructor() {
        const cart = sessionStorage.getItem("cart");
        if (!cart) {
            sessionStorage.setItem("cart", "{}")
            this._jsonCart = {};
        } else this._jsonCart = JSON.parse(cart);
    }

    async addToCart(productID) {
        const product = await getPosts(productID);
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

        sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
    }

    removeFromCart(concept) {
        if (this._jsonCart[concept].units === 1) delete this._jsonCart[concept];
        else {
            this._jsonCart[concept].units -= 1
            this._jsonCart[concept].total -= this._jsonCart[concept].price
        }

        sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
    }

    lastMomentAppendToCart(concept) { 
        this._jsonCart[concept].units += 1; 
        this._jsonCart[concept].total += this._jsonCart[concept].price

        sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
    }

    close() {
        sessionStorage.removeItem("cart");
        this._jsonCart = {};
        alert("Imagina que la compra finalizó");
    }

    getProducts() { return this._jsonCart }
}
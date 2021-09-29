import { cartStructure, cartProducts, responseProduct } from "../interface";

import { SS_CART } from "../config";

export default class Cart {
    constructor() {
        if (!sessionStorage.getItem(SS_CART)) sessionStorage.setItem(SS_CART, JSON.stringify({
            products: {},
            quantityProducts: 0
        }));
    }

    addToCart(product: responseProduct ): void {
        const { products, quantityProducts }: cartStructure = this.getCart();

        if (!products[product.title]) {
            products[product.title] = {
                id: product.id,
                price: product.body.length * 20,
                total: product.body.length * 20,
                units: 1
            };
        } else {
            products[product.title].units += 1;
            products[product.title].total += product.body.length * 20;
        };
        
        sessionStorage.setItem(SS_CART, JSON.stringify({
            products,
            quantityProducts: quantityProducts + 1
        }));
    }

    removeFromCart(concept: string): void {
        const { products, quantityProducts }: cartStructure = this.getCart();

        if (products[concept].units === 1) delete products[concept];
        else {
            products[concept].units -= 1
            products[concept].total -= products[concept].price
        }
        
        sessionStorage.setItem(SS_CART, JSON.stringify({
            products,
            quantityProducts: quantityProducts - 1
        }));
    }

    lastMomentAppendToCart(concept: string): void {
        const { products, quantityProducts }: cartStructure = this.getCart();
        products[concept].units += 1;
        products[concept].total += products[concept].price;
        
        sessionStorage.setItem(SS_CART, JSON.stringify({
            products,
            quantityProducts: quantityProducts + 1
        }));
    }

    close(): void {
        sessionStorage.removeItem(SS_CART);
        alert("Imagina que la compra finalizó");
    }
    
    private getCart(): cartStructure {
        return JSON.parse(sessionStorage.getItem(SS_CART))
    }

    getProducts(): cartProducts { 
        return this.getCart().products
    }

    
    getQuantityProducts(): number { 
        return this.getCart().quantityProducts
    }
}

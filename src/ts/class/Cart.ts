import CartStructure from "../interfaces/CartStructure";
import apiProduct from "../interfaces/ApiProduct";

import { cartStructureProducts } from "../types/cart";

import { SS_CART } from "../config";
import cartErrorHandler from "../errors/cartErrorHandler";

export default class Cart {
    constructor() {
        !sessionStorage.getItem(SS_CART) 
            && sessionStorage.setItem(SS_CART, JSON.stringify({
                products: {},
                quantityProducts: 0,
                total: 0
            }));
    }

    public addToCart(
        product: apiProduct 
    ): void {
        const { products, quantityProducts, total }: CartStructure = this.getCart();

        if (!products[product.id]) {
            products[product.id] = {
                id: product.id,
                title: product.title,
                price: product.body.length * 20,
                total: product.body.length * 20,
                units: 1
            };
        } else {
            products[product.id].units += 1;
            products[product.id].total += product.body.length * 20;
        };
        
        sessionStorage.setItem(SS_CART, JSON.stringify({
            products,
            quantityProducts: quantityProducts + 1,
            total: total + products[product.id].price
        }));
    }

    public removeFromCart(
        id: number
    ): void {
        const { products, quantityProducts, total }: CartStructure = this.getCart();
        const { price } = products[id];

        if (products[id].units === 1) delete products[id];
        else {
            products[id].units -= 1;
            products[id].total -= price;
        }

        sessionStorage.setItem(SS_CART, JSON.stringify({
            products,
            quantityProducts: quantityProducts - 1,
            total: total - price
        }));
    }

    public lastMomentAppendToCart(
        id: number
    ): void {
        const { products, quantityProducts, total }: CartStructure = this.getCart();

        products[id].units += 1;
        products[id].total += products[id].price;

        sessionStorage.setItem(SS_CART, JSON.stringify({
            products,
            quantityProducts: quantityProducts + 1,
            total: total + products[id].price
        }));
    }

    public close(
    ): void {
        sessionStorage.removeItem(SS_CART);
        alert("Imagina que la compra finalizó");
    }
    
    private getCart(
    ): CartStructure {
        return JSON.parse(sessionStorage.getItem(SS_CART));
    }

    /**
     * @return if the Cart is empty or not.
     */
    private isEmpty(
    ): boolean {
        const cartResponse: cartStructureProducts = this.getProducts();
        return (Object.values(cartResponse).length === 0);
    }

    /**
     * @return if the Cart is empty or not.
     */
    public isCartError(
    ): boolean {
        if (this.isEmpty()) {
            cartErrorHandler("El carrito está vacio.");
            return true
        }
        return false
    }

    /**
     * @return the products on cart.
     */
    public getProducts(
    ): cartStructureProducts { 
        return this.getCart()?.products || {}
    }

    public getQuantityProducts(
    ): number { 
        return this.getCart()?.quantityProducts || 0;
    }

    public getTotalPrice(
    ): number {
        return this.getCart()?.total || 0
    }
}

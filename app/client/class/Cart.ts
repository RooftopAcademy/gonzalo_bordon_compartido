import CartStructure from "../interfaces/CartStructure";
import CartProduct from "../interfaces/CartProduct";

import { cartProductsList } from "../types/cart";

import Storage from "./Storage";

import { SS_CART } from "../config";
import cartErrorHandler from "../errors/cartErrorHandler";

export default class Cart extends Storage<CartStructure> {
  private products: any = [];

  constructor() {
    super(SS_CART, {
      products: {},
      quantityProducts: 0,
    });
  }

  public addToCart(id: number): void {
    const { products, quantityProducts }: CartStructure = this.getStorage();

    if (!products[id]) {
      products[id] = 0;
    }
    products[id] += 1;

    this.updateStorage({
      products,
      quantityProducts: quantityProducts + 1,
    });
  }

  public removeFromCart(id: number): void {
    const { products, quantityProducts }: CartStructure = this.getStorage();

    if (products[id] === 1) delete products[id];
    else products[id] -= 1;

    this.updateStorage({
      products,
      quantityProducts: quantityProducts - 1,
    });
  }

  public close(): void {
    this.deleteStorage();
    alert("Imagina que la compra finalizó");
  }

  /**
   * @return if the Cart is empty or not.
   */
  private isEmpty(): boolean {
    return this.getProducts().length === 0;
  }

  /**
   * @return if the Cart is empty or not.
   */
  public isCartError(): boolean {
    if (this.isEmpty()) {
      cartErrorHandler("El carrito está vacio.");
      return true;
    }
    return false;
  }

  /**
   * @return the ID's of the products on cart.
   */
     public getProductsIDs(): cartProductsList {
      return this.getStorage()?.products || {};
  }

  /**
   * @return the ID's of the products on cart.
   */
     public setProducts(products: CartProduct[]): void {
      this.products = products;
  }

  /**
   * @return the products on cart.
   */
  public getProducts(): CartProduct[] {
    return this.products;
  }

  public getQuantityProducts(): number {
    return this.getStorage()?.quantityProducts || 0;
  }
}

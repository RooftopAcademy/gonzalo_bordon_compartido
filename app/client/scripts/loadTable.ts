import CartProduct from "../interfaces/CartProduct";
import Product from "../interfaces/Product";

import { cartProductsList } from "../types/cart";

import Router from "../class/Router";
import Cart from "../class/Cart";
import API from "../class/API";

//  LISTENERS
import lastMomentShopListener from "../listeners/lastMomentShopListener";

//  SCRIPTS
import app from "../main";
import updateQuantityProducts from "./updateQuantityProducts";

import CartTableComponent from "../components/CartTableComponent";

//  HTML;
const tBodyCartID: string = "tBodyCart";
const totalCartID: string = "totalCart";

function setCartElements(tBodyCart: string, total: number): void {
  document.getElementById(tBodyCartID).innerHTML = tBodyCart;
  document.getElementById(totalCartID).innerHTML = `$${total}`;
}

async function updateCart(cart: Cart): Promise<void> {
  const ProductsIDs: cartProductsList = cart.getProductsIDs();
  const IDList: string[] = Object.keys(ProductsIDs);

  const response = await API.fetchAPI(Router.createURL("/products/ids"), {
    IDList,
  });

  if (!API.isApiError(response)) {
    const products: CartProduct[] = (response as Product[]).map((product) => {
      const cartProduct: any = product;
      cartProduct.units = ProductsIDs[product.id];
      cartProduct.total = cartProduct.price * cartProduct.units;
      return cartProduct as CartProduct;
    });
    cart.setProducts(products as CartProduct[]);
  }
}

/**
 * Loads the Table Body of the Cart View
 */
export default async function loadTable(cart = app.cart): Promise<void> {
  await updateCart(cart);

  cart.isCartError();

  const products: CartProduct[] = cart.getProducts();
  const { total, CartTable } = CartTableComponent(products);

  setCartElements(CartTable, total);

  lastMomentShopListener(loadTable, cart);

  updateQuantityProducts(cart.getQuantityProducts());
}

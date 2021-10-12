//  TYPES
import { cartStructureProducts } from "../types/cart";

//  LISTENERS
import lastMomentShopListener from "../listeners/lastMomentShopListener";

//  SCRIPTS
import app from "../main";
import CartTableComponent from "../components/CartTableComponent";
import updateQuantityProducts from "./updateQuantityProducts";

//  HTML;
const tBodyCartID: string = "tBodyCart";
const totalCartID: string = "totalCart";


function setCartElements(
    tBodyCart: string,
    total: string
): void {
    document.getElementById(tBodyCartID).innerHTML = tBodyCart;
    document.getElementById(totalCartID).innerHTML = `$${total}`;
}

/**
 * Loads the Table Body of the Cart View
 */
export default function loadTable(
    cart = app.cart
): void {
    cart.isCartError();
    
    const products: cartStructureProducts = cart.getProducts();
    const totalPrice: number = cart.getTotalPrice();

    setCartElements( CartTableComponent(products), String( totalPrice ) );

    lastMomentShopListener( loadTable );

    updateQuantityProducts( String( cart.getQuantityProducts() ) );
}
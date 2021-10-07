//  INTERFACES
import Product from "../interfaces/Product";

//  TYPES
import { htmlString } from "../types/html";

//  COMPONENETS
import ProductsCartComponent from "../components/ProductsCardComponent";
import ProductSpecComponent from "../components/ProductSpecComponent";
import PaginatorComponenet from "../components/PaginatorComponent";

//  VIEWS
import cartView from "../views/cartView";
import errorView from "../views/errorView";
import indexView from "../views/indexView";
import productsView from "../views/productsView";
import productView from "../views/productView";

export default class UI {
    private document: HTMLElement;

    /**
     * @param document where the HTMLElement will be inserted.
     */
    constructor(
        document: HTMLElement
    ) {
        this.document = document;
    }

    /**
     * Render ProductView
     * @param product wehre the HTMLElement will be inserted.
     */
    public product(
        product: Product 
    ): void {
        let productSpecs: string = "";

        Object.keys(product.caracts).forEach((key: string): void => {
            productSpecs += ProductSpecComponent(key, product.caracts[key]);
        });

        this.document.innerHTML = productView(product, productSpecs);
    }

    /**
     * Render IndexView
     */
    public index(
    ): void {
        this.document.innerHTML = indexView();
    }

    /**
     * Render ProductsView
     */
    public products(
        products: Product[], 
        page: number, 
        maxPage: number
    ): void {
        let innerHTML: string = "";

        products.forEach((product: Product): void => {
            innerHTML += ProductsCartComponent(product);
        })

        this.document.innerHTML = productsView(innerHTML, this.paginator(page || 1, maxPage));
    }

    /**
     * Render CartView
     */
    public cart(
    ): void {
        this.document.innerHTML = cartView();
    }

    /**
     * Render ErrorView
     */
    public error(
    ): void {
        this.document.innerHTML = errorView();
    }

    /**
     * Render Paginator
     */
    private paginator(
        page: number, 
        maxPage: number
    ): htmlString {
        let left = page - 1;
        let center = page;
        let right = page + 1;

        if (page === 1) {
            ++left;
            ++center;
            ++right;
        } else if (page === maxPage) {
            --left;
            --center;
            --right;
        }

        return PaginatorComponenet(page, maxPage, { left, center, right });
    }
}
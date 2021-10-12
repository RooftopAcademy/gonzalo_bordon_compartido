//  INTERFACES
import ApiProduct from "../interfaces/ApiProduct";
import Product from "../interfaces/Product";

//  TYPES
import { apiError } from "../types/api";

//  LISTENERES
import menuHandlerListener from "../listeners/menuHandlerListener";
import searchsListener from "../listeners/searchsListener";
import shopListener from "../listeners/shopListener";
import paginatorListener from "../listeners/paginatorListener";
import closeCartListener from "../listeners/closeCartListener";

//  CLASSES
import API from "./API";
import Cart from "./Cart";
import UI from "./UI";
import Router from "./Router";
import Catalog from "./Catalog";

//  SCRIPTS
import updateQuantityProducts from "../scripts/updateQuantityProducts";
import loadTable from "../scripts/loadTable";
import { htmlFileName } from "../types/search";

export default class App {
    public ui: UI;
    public cart: Cart;
    public router: Router;

    constructor(
        ui: UI,
        cart: Cart,
        router: Router
    ) {
        this.ui = ui;
        this.cart = cart;
        this.router = router;
    }

    /**
     * Loads the required page and runs the respective listeners.
     */
    public async fileLoader(
    ): Promise<void> {
        await this.runLoader();

        updateQuantityProducts( String( this.cart.getQuantityProducts() ) );
        menuHandlerListener();
        searchsListener();
    }

    private async runLoader(
    ): Promise<void> {
        const HTMLFileName: htmlFileName = this.router.getHTMLFileName();
        return this[`${HTMLFileName}Loader`]();
    }

    /**
     * Loads Index.
     */
    private indexLoader(
    ): void {
        this.ui.index();
    }

    /**
     * Loads Product.
     */
    private async productLoader(
    ): Promise<void> {
        const productCod: string = this.router.getSearchURL().cod;
        const apiResponse = await API.getPost(productCod);

        if (!API.isApiError(apiResponse)) {
            const product: Product = Catalog.convertProduct(apiResponse as ApiProduct);
    
            this.ui.product(product);
            shopListener();
        }
    }

    /**
     * Loads Products.
     */
    private async productsLoader(
    ): Promise<void> {
        const { search, page } = this.router.getSearchURL();
        const apiResponse: ApiProduct[] | apiError = await API.getPosts(search);
        
        if (!API.isApiError(apiResponse)) {
            const maxPage: number = Math.ceil( apiResponse.length / 10 );
            const products: Product[] = Catalog.convertProducts(apiResponse as ApiProduct[], Number(page));
    
            this.ui.products(products, Number(page), maxPage);
            shopListener();
            paginatorListener();
        }
    }

    /**
     * Loads Cart.
     */
    private cartLoader(
    ): void {
        this.ui.cart();
        closeCartListener();
        loadTable( this.cart );
    }

    /**
     * Loads 404.
     */
    public errorLoader(
    ): void {
        this.ui.error();
    }
}
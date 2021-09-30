import { responseProduct, apiError, searchData } from "./interface";
import Product from "./class/Product";
import UI from "./class/UI";

import { getPost, getPosts, getPostsBySearch } from "./api";
import { getSearchURL } from "./script";

function cartFile(): string {
    return /* html */ `
    <div class="cartTitle">
        <h1>Bienvenido al Carrito</h1>
    </div>
    <div>
        <h3 class="cartErrorMessage" id="cartErrorMessage"></h3>
    </div>
    <div class="tableContainer">
        <table>
            <thead>
                <tr>
                    <th>A</th>
                    <th>Concepto</th>
                    <th>Unidades</th>
                    <th>Precio Unitario</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody id="tBody"></tbody>
            <tfoot>
                <tr>
                    <th colspan="4">Total:</th>
                    <th id="total"></th>
                </tr>
            </tfoot>
        </table>
        <div class="cartCloseButtonContainer">
            <button class="cartCloseButton" onclick="closeCart()">Finalizar Compra</button>
        </div>
    </div>
`
}

function indexFile(): string {
    return /* html */ `
        <header>
            <h1>Furey's Lab</h1>
            <h4>Soluciones Inteligentes</h4>
        </header>
        <article id="about-us">
            <h2>Sobre Nosotros</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, fugiat aliquid. Est sint eligendi harum dolore. Ipsam accusantium earum doloribus dignissimos illo hic voluptatum harum ducimus totam? Obcaecati totam laudantium quidem velit hic voluptatibus ratione deleniti saepe ullam tenetur enim eveniet eligendi ea optio aliquid esse cumque, facilis repellat commodi.</p>
        </article>
        <article class="article-even">
            <h3>Calidad Garantizada</h3>
            <h2>Nuestros Productos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vel, dolorem rem reiciendis cupiditate officia.</p>
            <a class="shop-btn" href="?htmlFileName=products">Comprar Ahora</a>
        </article>
        <article class="contact" id="contact">
            <div class="contact-card">
                <h2>Contáctanos</h2>
                <form>
                    <div class="input-group">
                        <h5>Nombre y Apellido:</h5>
                        <input placeholder="Juan Perez " />
                    </div>
                    <div class="input-group">
                        <h5>Correo Electrónico:</h5>
                        <input placeholder="example@example.com" />
                    </div>
                    <div class="input-group">
                        <h5>Mensaje:</h5>
                        <textarea style="width: 100%;" rows="5"></textarea>
                    </div>
                </form>
            </div>
        </article>
    `
}

async function productsFile(): Promise<string | void> {
    const { page, search }: searchData = getSearchURL();
    const PAGE = Number(page) || 1;
    const PRODUCTS: responseProduct[] | apiError = await ((search) ? getPostsBySearch: getPosts)(search);
    
    if (typeof PRODUCTS !== "string") {
        const MAX_PAGE = Math.ceil(PRODUCTS.length / 10)
        let innerHTML = /* html */ `
            <h1 class="products-header">Productos</h1>
            <div class="products" id="products">
        `
        if (PRODUCTS.length > 10) { PRODUCTS.splice(0, (PAGE - 1) * 10) }
        
        for (let index = 0; index < 10 && index < PRODUCTS.length; index++) {
            innerHTML += UI.appendOnProducts(
                new Product(
                    "src/img/noprew-index.png",
                    PRODUCTS[index].title,
                    "",
                    PRODUCTS[index].body.length * 20,
                    {},
                    PRODUCTS[index].id
                )
            )
        }
        return innerHTML + `
            </div>
            <div class="paginator">
                ${UI.appendOnPaginator(PAGE, MAX_PAGE)}
            </div>
        `
    } else {
        if ( confirm("Ha ocurrido un ERROR") ) { 
            window.history.back()
        };
    }
}

async function productFile(): Promise<string | void> {
    const cod: string = getSearchURL().cod;
    const product: responseProduct | apiError = await getPost(cod);
    if (typeof product !== "string") {
        return `
            <div class="product">
                ${UI.appendOnProduct(
                    new Product(
                        "src/img/noprew-index.png",
                        product.title,
                        product.body,
                        product.body.length * 20,
                        {
                            "Caraterística 1": "Especificación 1",
                            "Caraterística 2": "Especificación 2",
                            "Caraterística 3": "Especificación 3",
                            "Caraterística 4": "Especificación 4",
                            "Caraterística 5": "Especificación 5"
                        },
                        product.id
                    )
                )}
            </div>
        `
    } else {
        if ( confirm("Este Producto no existe") ) window.history.back();
    }
}

export {
    cartFile,
    indexFile,
    productFile,
    productsFile
}
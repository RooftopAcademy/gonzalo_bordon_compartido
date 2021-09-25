//  INTERFACES
interface jsonProduct {
    id: number, 
    units: number,
    total: number,
    price: number
}

interface historyData {
    htmlFileName: string,
    page: string | null,
    cod: string | null,
    oldData: historyData | null,
    newData: historyData | null,
}

interface cartProducts {
    [index : string] : jsonProduct
}

interface responseProduct { 
    title: string,
    body: string,
    id: number,
    userId: number
}


//  TIPOS
type responseToCart = { 
    body?: string, 
    extra?: string, 
    error?: string
}

type apiError = "ERROR";


//  CLASES
class Cart {
    _jsonCart: cartProducts;
    _quantityProducts: number

    constructor() {
        const cart : string = sessionStorage.getItem("cart");
        this._jsonCart = {};
        this._quantityProducts = 0
        if (!cart) sessionStorage.setItem("cart", "{}");
        else {
            this._jsonCart = JSON.parse(cart);
            for (const productIndex of Object.keys(this._jsonCart)) this._quantityProducts += this._jsonCart[productIndex].units;
        };
    }

    addToCart(product : responseProduct | apiError ) : void {
        if (typeof product !== "string" ) {
            if (!this._jsonCart[product.title]) {
                this._jsonCart[product.title] = {
                    id: product.id,
                    price: product.body.length * 20,
                    total: product.body.length * 20,
                    units: 1
                };
            } else {
                this._jsonCart[product.title].units += 1;
                this._jsonCart[product.title].total += product.body.length * 20;
            };
    
            this._quantityProducts += 1;
            
            sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
        }
    }

    removeFromCart(concept : string) : void {
        if (this._jsonCart[concept].units === 1) delete this._jsonCart[concept];
        else {
            this._jsonCart[concept].units -= 1
            this._jsonCart[concept].total -= this._jsonCart[concept].price
        }

        this._quantityProducts -= 1;
        
        sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
    }

    lastMomentAppendToCart(concept : string) : void { 
        this._jsonCart[concept].units += 1; 
        this._jsonCart[concept].total += this._jsonCart[concept].price
        
        this._quantityProducts += 1;
        
        sessionStorage.setItem("cart", JSON.stringify(this._jsonCart));
    }

    close() : void {
        sessionStorage.removeItem("cart");
        this._jsonCart = {};
        this._quantityProducts = 0;
        alert("Imagina que la compra finalizó");
    }

    getProducts() : cartProducts { return this._jsonCart }

    getQuantityProducts() : number { return this._quantityProducts }
}

class Product {
    image : string; 
    title : string; 
    desc : string; 
    price : number; 
    caracts : {
        [index: string]: string
    }; 
    cod : string | number;

    constructor(image : string, 
                title : string, 
                desc : string, 
                price : number, 
                caracts : {
                    [index: string]: string
                }, 
                cod : string | number
    ) {
        this.image = image;
        this.title = title;
        this.desc = desc;
        this.price = price;
        this.caracts = caracts;
        this.cod = cod
    }
}

class UI {
    static appendOnProduct(product : Product ) : string {
        let productSpecs : string = "";
        for (const key in product.caracts) {
            productSpecs += /* html */ `
                <div class="productSpecs"><span class="product-spec">${key}: </span> ${product.caracts[key]}</div>
            `
        }

        return /* html */ `
            <img src="${product.image}">
            <div class="product-info" id="product_cod-${product.cod}">
                <h2>${product.title}</h2>
                <p>${product.desc}</p>
                <div class="productSpecs"><span class="product-spec">Precio: </span>$${product.price}</div>
                <div class="container-productSpecs">
                    ${productSpecs}
                </div>
                <a class="shopButton">Comprar</a>
            </div>
        `;
    }

    static appendOnProducts(product : Product ) : string {
        return /* html */ `
        <div class="product-card" id="product_cod-${product.cod}">
            <a class="js-SAP_a product-image" data-html-file-name="product.html" data-cod="${product.cod}">
                <img src="${product.image}">
            </a>
            <div class="product-info">
                <h5><a class="js-SAP_a" data-html-file-name="product.html" data-cod="${product.cod}">${product.title}</a></h5>
                <h6>$${product.price}</h6>
            </div>
            <a class="shopButton shopButton-products">Comprar</a>
        </div>
        `;
    }

    static appendOnCart(products : cartProducts) : responseToCart {
        const response : responseToCart = {}
        let innerHTML : string = "";
        let total : number = 0;

        if (products) {
            for (const key in products) {
                innerHTML += /* html */ `
                    <tr>
                        <td class="text-center adminTD"><div class="reduceOneButton">-1</div><div class="increaseOneButton">+1</div></td>
                        <td class="conceptTable">${ key }</td>
                        <td class="text-center">${ products[key].units }</td>
                        <td class="text-center">$${ products[key].price }</td>
                        <td class="text-center">$${ products[key].total }</td>
                    </tr>
                `;
        
                total += products[key].total;
            }
            response.body = innerHTML;
            response.extra = "$" + total;
        } else response.error = "No hay ningún producto añadido al carrito";

        return response
    }

    static appendOnPaginator(page : number) : string {
        let innerHTML = "";
        let left = page - 1;
        let center = page;
        let right = page + 1;

        if (page >= 3) innerHTML += `<a class="js-SAP_a " data-html-file-name="products.html" data-page="1"><<</a>`;

        if (page === 1) {
            ++left;
            ++center;
            ++right;
        } else if (page === 10) {
            --left;
            --center;
            --right;
        }

        innerHTML += `
            <a class="js-SAP_a ${ (left === page) ? "active" : "" }" data-html-file-name="products.html" data-page="${ left }">${ left }</a>
            <a class="js-SAP_a ${ (center === page) ? "active" : "" }" data-html-file-name="products.html" data-page="${ center }">${ center }</a>
            <a class="js-SAP_a ${ (right === page) ? "active" : "" }" data-html-file-name="products.html" data-page="${ right }">${ right }</a>
        `;

        if (page <= 8) innerHTML += `<a data-html-file-name="products.html" data-page="10">>></a>`;

        return innerHTML
    }
}


//  CONSTANTES
const API : string = "https://jsonplaceholder.typicode.com/";
let cart : Cart;
const pagesHTML: {
    [index: string] : () => void | string | Promise<string | void>
} = {
    "cart.html": cartFile,
    "product.html": productFile,
    "products.html": productsFile,
    "index.html": indexFile,
}

const nav_buttons : HTMLCollectionOf<Element> = document.getElementsByClassName("openNav-button");
const nav_container : HTMLElement = document.getElementById("nav-container");
const jsSAP_a : HTMLCollectionOf<Element> = document.getElementsByClassName("js-SAP_a");


//  FUNCIONES
async function getPost(q : string | number) : Promise<responseProduct | apiError> { 
    return await fetch(API + `posts/${q}`).then(async e => {
        const res = await e.json();
        return (res === {}) ? "ERROR" : res;
    });
}

async function getPosts() : Promise<responseProduct[] | apiError> { 
    const apiResponse : [] | responseProduct[] = await fetch(API + "posts").then(e => e.json());
    return (apiResponse.length === 0) ? "ERROR" : apiResponse;
}

function listenToShopButtons() : void { 
    const shopButtons : HTMLCollectionOf<Element> = document.getElementsByClassName("shopButton");
    
    Array.from(shopButtons).forEach((shopButton : Element) : void => { 
        shopButton.addEventListener("click", async (e : Event ) : Promise<void> => {
            if (e.target instanceof HTMLElement) {
                const id : string = e.target.parentElement.id.replace("product_cod-", "");
                const product : responseProduct | apiError = await getPost(id);
    
                await cart.addToCart(product);
                updateQuantityProducts(cart.getQuantityProducts());
            }
        })
    });
}

function updateQuantityProducts(q : number) : void { document.getElementById("quantityProducts").innerHTML = String(q); }

function indexFile() : string {
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
            <a class="js-SAP_a shop-btn" data-html-file-name="products.html">Comprar Ahora</a>
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

async function productsFile() : Promise<string | void> {
    const page : number = Number(getHistory().page) || 1;
    const products : responseProduct[] | apiError = await getPosts();
    
    if (typeof products !== "string") {
        let innerHTML = /* html */ `
            <h1>Productos</h1>
            <div class="products" id="products">
        `
        products.splice(0, (page - 1) * 10)
    
        for (let index = 0; index < 10; index++) {
            innerHTML += UI.appendOnProducts(
                new Product(
                    "img/noprew-index.png",
                    products[index].title,
                    "",
                    products[index].body.length * 20,
                    {},
                    products[index].id
                )
            )
        }
        return innerHTML + `
            </div>
            <div class="paginator">
                ${UI.appendOnPaginator(page)}
            </div>
        `
    } else {
        if ( confirm("Ha ocurrido un ERROR") ) window.history.back();
    }
}

async function productFile() : Promise<string | void> {
    const cod : string = getHistory().cod;
    const product : responseProduct | apiError = await getPost(cod);
    if (typeof product !== "string") {
        return `
            <div class="product">
                ${UI.appendOnProduct(
                    new Product(
                        "img/noprew-index.png",
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
        if ( confirm("Este Producto no existe") ) goBack();
    }
}

function cartFile() : string {
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

function loadTable() : void {
    const products : cartProducts = cart.getProducts();
    const responseToCart : responseToCart = UI.appendOnCart(products);

    if (responseToCart.error) document.getElementById("cartErrorMessage").innerHTML = responseToCart.error;
    else {
        document.getElementById("tBody").innerHTML = responseToCart.body;
        document.getElementById("total").innerHTML = responseToCart.extra;

        for (const reduceOneButton of Array.from(document.getElementsByClassName("reduceOneButton"))) {
            reduceOneButton.addEventListener("click", (e : Event) : void => {
                if (e.target instanceof HTMLElement) {
                    cart.removeFromCart(e.target.parentElement.nextElementSibling.innerHTML)
                    loadTable();
                }
            })
        }
        for (const increaseOneButton of Array.from(document.getElementsByClassName("increaseOneButton"))) {
            increaseOneButton.addEventListener("click", (e : Event) : void => {
                if (e.target instanceof HTMLElement) {
                    cart.lastMomentAppendToCart(e.target.parentElement.nextElementSibling.innerHTML)
                    loadTable();
                }
            })
        }
    };

    updateQuantityProducts(cart.getQuantityProducts());
}

function closeCart() : void {
    cart.close();
    loadTable();
}

function getHistory() : historyData {
    let historyData : historyData | null = JSON.parse(sessionStorage.getItem("historyData"));

    if (historyData === null) {
        historyData = {
            htmlFileName: "index.html",
            page: null,
            cod: null,
            oldData: null,
            newData: null,
        }
        sessionStorage.setItem("historyData", JSON.stringify(historyData))
    }

    return historyData
}

function goBack() : void {
    const { htmlFileName, page, cod, oldData, newData } : historyData = getHistory();
    if (oldData !== null) {
        sessionStorage.setItem("historyData", JSON.stringify({
            htmlFileName: oldData.htmlFileName,
            page: oldData.page,
            cod: oldData.cod,
            oldData: oldData.oldData,
            newData: {
                htmlFileName, 
                page, 
                cod, 
                oldData: null,
                newData: newData || null,
            },
        }))
        loadFile()
    } else {
        window.history.back()
    }

}

function goForward() : void {
    window.history.pushState(null, "", "index.html");
    const { htmlFileName, page, cod, oldData, newData } : historyData = getHistory();
    if (newData !== null) {
        sessionStorage.setItem("historyData", JSON.stringify({
            htmlFileName: newData.htmlFileName,
            page: newData.page,
            cod: newData.cod,
            oldData: {
                htmlFileName, 
                page, 
                cod, 
                oldData: oldData || null,
                newData: null,
            },
            newData: newData.newData,
        }))
        loadFile()
    }
}

//  EJECUTAR AL INICIO
window.onload = window.onpopstate = loadFile;

async function loadFile() : Promise<void> { 
    cart = new Cart();
    const { htmlFileName } = getHistory();


    const innerHTML : string | void = await pagesHTML[htmlFileName || "index.html"]();
    if (typeof innerHTML === "string") {
        document.getElementById("app").innerHTML = innerHTML; 
    }
    if (["products.html", "product.html"].indexOf(htmlFileName) !== -1) listenToShopButtons();
    else if (htmlFileName === "cart.html") loadTable();

    updateQuantityProducts(cart.getQuantityProducts());

    Array.from(jsSAP_a).forEach((a_button : Element) => {
        if (a_button instanceof HTMLElement) {
            a_button.addEventListener("click", (e) : void => {
                e.preventDefault();
                const currentData = a_button.dataset;
                sessionStorage.setItem("historyData", JSON.stringify({
                    htmlFileName: currentData.htmlFileName,
                    page: currentData.page,
                    cod: currentData.cod,
                    oldData: getHistory(),
                    newData: null,
                }))
                window.history.pushState(null, "", "index.html");
                loadFile()
            })
        }
    })
};

Array.from(nav_buttons).forEach((nav_button : Element) => {
    nav_button.addEventListener("click", () : void => {
        if (nav_container.className.search("active") === -1) nav_container.className += " active";
        else nav_container.className = nav_container.className.replace(" active", "");
    })
});
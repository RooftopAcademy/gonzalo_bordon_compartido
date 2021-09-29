//  INTERFACES
interface jsonProduct {
    id: number, 
    units: number,
    total: number,
    price: number
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
            <a class="product-image" href="product.html?cod=${product.cod}">
                <img src="${product.image}">
            </a>
            <div class="product-info">
                <h5><a href="product.html?cod=${product.cod}">${product.title}</a></h5>
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

        if (page >= 3) innerHTML += `<a href="products.html?page=1"><<</a>`;

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
            <a class="${ (left === page) ? "active" : "" }" href="products.html?page=${ left }">${ left }</a>
            <a class="${ (center === page) ? "active" : "" }" href="products.html?page=${ center }">${ center }</a>
            <a class="${ (right === page) ? "active" : "" }" href="products.html?page=${ right }">${ right }</a>
        `;

        if (page <= 8) innerHTML += `<a href="products.html?page=10">>></a>`;

        return innerHTML
    }
}


//  CONSTANTES
const API : string = "https://jsonplaceholder.typicode.com/";
let cart : Cart;
const pagesHTML: {
    [index: string] : () => void | Promise<void>
} = {
    "cart": cartFile,
    "product": productFile,
    "products": productsFile,
    "index": () => {}
}

const nav_buttons : HTMLCollectionOf<Element> = document.getElementsByClassName("openNav-button");
const nav_container : HTMLElement = document.getElementById("nav-container");


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

async function productsFile() : Promise<void> {
    const page : number = Number(window.location.search.replace("?page=", "")) || 1;
    const products : responseProduct[] | apiError = await getPosts();

    if (typeof products !== "string") {
        products.splice(0, (page - 1) * 10)
    
        for (let index = 0; index < 10; index++) {
            document.getElementsByClassName("products")[0].innerHTML += UI.appendOnProducts(
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
        listenToShopButtons();
        document.getElementById("paginator").innerHTML = UI.appendOnPaginator(page);
    } else {
        if ( confirm("Ha ocurrido un ERROR") ) window.history.back();
    }
}

async function productFile() : Promise<void> {
    const cod : string = window.location.search.replace("?cod=", "");
    const product : responseProduct | apiError = await getPost(cod);
    if (typeof product !== "string") {
        document.getElementsByClassName("product")[0].innerHTML = UI.appendOnProduct(
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
        );
        listenToShopButtons();
    } else {
        if ( confirm("Este Producto no existe") ) window.history.back();
    }
}

function cartFile() : void {
    loadTable()
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

//  EJECUTAR AL INICIO
window.onload = window.onpagehide = window.onpageshow = async () => { 
    cart = new Cart();
    const arrayParsedHREF = window.location.pathname.split("/");
    const htmlFile = arrayParsedHREF[arrayParsedHREF.length - 1].replace(".html", "");
    await pagesHTML[htmlFile]();

    updateQuantityProducts(cart.getQuantityProducts()) 
};

Array.from(nav_buttons).forEach((nav_button : Element) => {
    nav_button.addEventListener("click", () /* : Void */ => {
        if (nav_container.className.search("active") === -1) nav_container.className += " active";
        else nav_container.className = nav_container.className.replace(" active", "");
    })
});

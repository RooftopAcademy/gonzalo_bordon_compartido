import { cartProducts } from "../interface";
import Product from "./Product";

type responseToCart = { 
    body?: string, 
    extra?: string, 
    error?: string
}

export default class UI {
    static appendOnProduct(product : Product ) : string {
        let productSpecs : string = "";
        for (const key in product.caracts) {
            productSpecs += /* html */ `
                <div class="productSpecs"><span class="product-spec">${key}: </span> ${product.caracts[key]}</div>
            `
        }

        return /* html */ `
            <img src="${product.image}">
            <div class="product-info">
                <h2>${product.title}</h2>
                <p>${product.desc}</p>
                <div class="productSpecs"><span class="product-spec">Precio: </span>$${product.price}</div>
                <div class="container-productSpecs">
                    ${productSpecs}
                </div>
                <a class="shopButton" data-cod="${product.cod}">Comprar</a>
            </div>
        `;
    }

    static appendOnProducts(product : Product ) : string {
        return /* html */ `
        <div class="product-card">
            <a class="product-image" href="?htmlFileName=product&cod=${product.cod}">
                <img src="${product.image}">
            </a>
            <div class="product-info">
                <h5><a href="?htmlFileName=product&cod=${product.cod}">${product.title}</a></h5>
                <h6>$${product.price}</h6>
            </div>
            <a class="shopButton shopButton-products" data-cod="${product.cod}">Comprar</a>
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

        if (page >= 3) innerHTML += `<a href="?htmlFileName=products&page=1"><<</a>`;

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
            <a class="${ (left === page) ? "active" : "" }" href="?htmlFileName=products&page=${ left }">${ left }</a>
            <a class="${ (center === page) ? "active" : "" }" href="?htmlFileName=products&page=${ center }">${ center }</a>
            <a class="${ (right === page) ? "active" : "" }" href="?htmlFileName=products&page=${ right }">${ right }</a>
        `;

        if (page <= 8) innerHTML += `<a href="?htmlFileName=products&page=10">>></a>`;

        return innerHTML
    }
}

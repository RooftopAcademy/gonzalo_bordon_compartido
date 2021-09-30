import { cartProducts } from "../interface";
import Product from "./Product";

type responseToCart = { 
    body?: string, 
    extra?: string, 
    error?: string
}

export default class UI {
    static appendOnProduct(product: Product ): string {
        let productSpecs: string = "";
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

    static appendOnProducts(product: Product ): string {
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

    static appendOnCart(products: cartProducts): responseToCart {
        const response: responseToCart = {}
        let innerHTML: string = "";
        let total: number = 0;

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

    static appendOnPaginator(page: number, maxPage: number): string {
        console.log(maxPage)
        let innerHTML = "";
        let left = page - 1;
        let center = page;
        let right = page + 1;

        if (page >= 3 && maxPage > 3) innerHTML += `<a class="js-paginator" data-page="1"><<</a>`;

        if (page === 1) {
            ++left;
            ++center;
            ++right;
        } else if (page === maxPage) {
            --left;
            --center;
            --right;
        }

        innerHTML +=
            ((left > 0 && left <= maxPage) 
                ? `<a class="js-paginator ${ (left === page) ? "active" : "" }" data-page="${ left }">${ left }</a>` 
                : "") +
            ((center > 0 && center <= maxPage) 
                ? `<a class="js-paginator ${ (center === page) ? "active" : "" }" data-page="${ center }">${ center }</a>` 
                : "") +
            ((right > 0 && right <= maxPage) 
                ? `<a class="js-paginator ${ (right === page) ? "active" : "" }" data-page="${ right }">${ right }</a>` 
                : "");

        if (page <= 8 && maxPage > 3) innerHTML += `<a class="js-paginator" data-page="${maxPage}">>></a>`;

        return innerHTML
    }
}

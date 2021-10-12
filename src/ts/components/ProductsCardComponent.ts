import Product from "../interfaces/Product";

export default function ProductsCardComponent({image, cod, price, title}: Product): string {
    return /* html */ `
        <div class="product-card">
            <a class="product-image" href="?htmlFileName=product&cod=${cod}">
                <img src="${image}">
            </a>
            <div class="product-info">
                <h5><a href="?htmlFileName=product&cod=${cod}">${title}</a></h5>
                <h6>$${price}</h6>
            </div>
            <a class="shopButton shopButton-products" data-cod="${cod}">Comprar</a>
        </div>
    `;
}
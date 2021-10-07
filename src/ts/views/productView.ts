import Product from "../interfaces/Product";

export default function productView(
    {
        image, 
        title, 
        desc,
        price,
        cod
    }: Product,
    productSpecs: string
): string {
    return /* html */ `
        <div class="product">
            <img src="${image}">
            <div class="product-info">
                <h2>${title}</h2>
                <p>${desc}</p>
                <div class="productSpecs"><span class="product-spec">Precio: </span>$${price}</div>
                <div class="container-productSpecs">
                    ${productSpecs}
                </div>
                <a class="shopButton" data-cod="${cod}">Comprar</a>
            </div>
        </div>
    `
}
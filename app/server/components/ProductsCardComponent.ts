import Product from "../interfaces/Product";

export default function ProductsCardComponent(
    {
        image, 
        id,
        price, 
        title
    }: Product
): string {
    return /* html */ `
        <div class="product-card">
            <div class="product-image">
                <div style="position:relative;">
                    <a href="/product/${id}">
                        <img src="${image}">
                    </a>
                    <div class="favorites-icon" data-id="${id}">
                        &#9733;
                    </div>
                </div>
            </div>
            <div class="product-info">
                <h5><a href="/product/${id}">${title}</a></h5>
                <h6>$${price}</h6>
            </div>
            <a class="shopButton shopButton-products" data-id="${id}">Comprar</a>
        </div>
    `;
}
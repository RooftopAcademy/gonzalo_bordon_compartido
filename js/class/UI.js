class UI {
    appendOnProduct(product) {
        let productSpecs = "";
        for (const key in product.caracts) {
            productSpecs += /* html */ `
                <div class="productSpecs"><span class="product-spec">${key}: </span> ${product.caracts[key]}</div>
            `
        }

        document.getElementsByClassName("product")[0].innerHTML = /* html */ `
            <img src="${product.image}">
            <div class="product-info" id="product_cod-${product.cod}">
                <h2>${product.title}</h2>
                <p>${product.desc}</p>
                <div class="productSpecs"><span class="product-spec">Precio: </span>$${product.price}</div>
                <div class="container-productSpecs">
                ${productSpecs}
                </div>
                <div>
                    <a href="#" class="shopButton">Comprar</a>
                </div>
            </div>
        `;
    }

    appendOnProducts(product) {
        document.getElementsByClassName("products")[0].innerHTML +=
        /* html */ `
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

    appendOnCart(product) {
        
    }
}

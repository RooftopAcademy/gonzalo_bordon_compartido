/* 
type apiProduct = { 
    title: string, 
    body: string, 
    id: number, 
    userId: number
    error?: boolean
}
*/

const ui = new UI();

window.onload = async () /* : Void */ => {
    const cod /* : string */ = window.location.search.replace("?cod=", "");
    const product /* : apiProduct */ = await getPosts(cod);
    if (product.error) {
        if ( confirm("Este Producto no existe") ) window.history.back();
    } else {
        document.getElementsByClassName("product")[0].innerHTML = ui.appendOnProduct(
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
    }
}

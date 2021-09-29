window.onload = async () : Promise<void> => {
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

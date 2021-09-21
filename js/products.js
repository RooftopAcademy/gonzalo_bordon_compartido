const ui = new UI();

window.onload = async () => {
    const products = await getPosts();
    for (let index = 0; index < 10; index++) {
        ui.appendOnProducts(
            new Product(
                "img/noprew-index.png",
                products[index].title,
                products[index].body,
                products[index].body.length * 20,
                {
                    "Caraterística 1": "Especificación 1",
                    "Caraterística 2": "Especificación 2",
                    "Caraterística 3": "Especificación 3",
                    "Caraterística 4": "Especificación 4",
                    "Caraterística 5": "Especificación 5"
                }
            )
        )
    }
}
const ui = new UI();

window.onload = () => {
    for (let index = 0; index < 10; index++) {
        ui.appendOnProducts(
            new Product(
                "img/noprew-index.png",
                "Medicamentos Varios",
                `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero placeat ut veritatis numquam
                beatae repudiandae quo? Eum blanditiis minima illo assumenda, impedit doloribus dolorum aliquid
                quo adipisci necessitatibus! Ex, recusandae.`,
                15000,
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
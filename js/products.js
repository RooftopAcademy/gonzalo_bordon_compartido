/* 
type apiProduct = { 
    title: string, 
    body: string, 
    id: number, 
    userId: number
    error?: boolean
}
*/

const ui /* : UI */ = new UI();

window.onload = async () /* : Void */ => {
    const page /* : number */ = Number(window.location.search.replace("?page=", "")) || 1;
    const products /* : apiProduct[] */ = await getPosts();
    products.splice(0, (page - 1) * 10)

    for (let index = 0; index < 10; index++) {
        document.getElementsByClassName("products")[0].innerHTML += ui.appendOnProducts(
            new Product(
                "img/noprew-index.png",
                products[index].title,
                "",
                products[index].body.length * 20,
                {},
                products[index].id
            )
        )
    }

    listenToShopButtons();
    document.getElementById("paginator").innerHTML = ui.appendOnPaginator(page);
}
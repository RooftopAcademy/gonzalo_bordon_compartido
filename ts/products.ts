window.onload = async () : Promise<void> => {
    const page : number = Number(window.location.search.replace("?page=", "")) || 1;
    const products : responseProduct[] | apiError = await getPosts();

    if (typeof products !== "string") {
        products.splice(0, (page - 1) * 10)
    
        for (let index = 0; index < 10; index++) {
            document.getElementsByClassName("products")[0].innerHTML += UI.appendOnProducts(
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
        document.getElementById("paginator").innerHTML = UI.appendOnPaginator(page);
    } else {
        if ( confirm("Ha ocurrido un ERROR") ) window.history.back();
    }
}
const nav_buttons = document.getElementsByClassName("openNav-button");
const nav_container = document.getElementById("nav-container");

Object.values(nav_buttons).forEach(nav_button => {
    nav_button.addEventListener("click", () => {
        if (nav_container.className.search("active") === -1) nav_container.className += " active";
        else nav_container.className = nav_container.className.replace(" active", "");
    })
});

function listenToShopButtons() {
    const shopButtons = document.getElementsByClassName("shopButton");
    
    Object.values(shopButtons).forEach(shopButton => {
        shopButton.addEventListener("click", (e) => {
            const cart = new Cart();
            const id = e.target.parentElement.id.replace("product_cod-", "");
            cart.addToCart(id);
        })
    });
}

window.onload = window.onpagehide = window.onpageshow = () => { updateQuantityProducts((new Cart()).quantityProducts) };

const nav_buttons /* : HTMLElement */ = document.getElementsByClassName("openNav-button");
const nav_container /* : HTMLElement */ = document.getElementById("nav-container");

Object.values(nav_buttons).forEach(nav_button => {
    nav_button.addEventListener("click", () /* : Void */ => {
        if (nav_container.className.search("active") === -1) nav_container.className += " active";
        else nav_container.className = nav_container.className.replace(" active", "");
    })
});

function listenToShopButtons() /* : Void */ { 
    const shopButtons /* : HTMLElement */ = document.getElementsByClassName("shopButton");
    
    Object.values(shopButtons).forEach((shopButton /* : HTMLElement */ ) /* : Void */ => { 
        shopButton.addEventListener("click", async (e /* : HTMLElement */ ) /* : Void */ => {
            const cart /* : Cart */ = new Cart();
            const id /* : string */ = e.target.parentElement.id.replace("product_cod-", "");
            await cart.addToCart(id);
            updateQuantityProducts(cart.quantityProducts);
        })
    });
}

function updateQuantityProducts(q /* : number */) /* : Void */ { document.getElementById("quantityProducts").innerHTML = q; }
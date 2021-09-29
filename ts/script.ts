const cart : Cart = new Cart();

const nav_buttons : HTMLCollectionOf<Element> = document.getElementsByClassName("openNav-button");
const nav_container : HTMLElement = document.getElementById("nav-container");

window.onload = window.onpagehide = window.onpageshow = () => { updateQuantityProducts(cart.getQuantityProducts()) };

Array.from(nav_buttons).forEach((nav_button : Element) => {
    nav_button.addEventListener("click", () /* : Void */ => {
        if (nav_container.className.search("active") === -1) nav_container.className += " active";
        else nav_container.className = nav_container.className.replace(" active", "");
    })
});

function listenToShopButtons() : void { 
    const shopButtons : HTMLCollectionOf<Element> = document.getElementsByClassName("shopButton");
    
    Array.from(shopButtons).forEach((shopButton : Element) : void => { 
        shopButton.addEventListener("click", async (e : Event ) : Promise<void> => {
            if (e.target instanceof HTMLElement) {
                const id : string = e.target.parentElement.id.replace("product_cod-", "");
                const product : responseProduct | apiError = await getPost(id);
    
                await cart.addToCart(product);
                updateQuantityProducts(cart.getQuantityProducts());
            }
        })
    });
}

function updateQuantityProducts(q : number) : void { document.getElementById("quantityProducts").innerHTML = String(q); }
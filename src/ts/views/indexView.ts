export default function indexView(): string {
    return /* html */ `
        <header>
            <h1>Furey's Lab</h1>
            <h4>Soluciones Inteligentes</h4>
        </header>
        <article id="about-us">
            <h2>Sobre Nosotros</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, fugiat aliquid. Est sint eligendi harum dolore. Ipsam accusantium earum doloribus dignissimos illo hic voluptatum harum ducimus totam? Obcaecati totam laudantium quidem velit hic voluptatibus ratione deleniti saepe ullam tenetur enim eveniet eligendi ea optio aliquid esse cumque, facilis repellat commodi.</p>
        </article>
        <article class="article-even">
            <h3>Calidad Garantizada</h3>
            <h2>Nuestros Productos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vel, dolorem rem reiciendis cupiditate officia.</p>
            <a class="shop-btn" href="?htmlFileName=products">Comprar Ahora</a>
        </article>
        <article class="contact" id="contact">
            <div class="contact-card">
                <h2>Contáctanos</h2>
                <form>
                    <div class="input-group">
                        <h5>Nombre y Apellido:</h5>
                        <input placeholder="Juan Perez " />
                    </div>
                    <div class="input-group">
                        <h5>Correo Electrónico:</h5>
                        <input placeholder="example@example.com" />
                    </div>
                    <div class="input-group">
                        <h5>Mensaje:</h5>
                        <textarea style="width: 100%;" rows="5"></textarea>
                    </div>
                </form>
            </div>
        </article>
    `
}
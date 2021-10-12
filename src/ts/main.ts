import App from "./class/App";
import Cart from "./class/Cart";
import Router from "./class/Router";
import UI from "./class/UI";

const HTML_APP = document.getElementById("app");

const router: Router = new Router();
const cart: Cart = new Cart();
const ui: UI = new UI(HTML_APP);
const app: App = new App(ui, cart, router);

app.fileLoader();

export default app;
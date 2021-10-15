import App from "./class/App";

const HTML_APP = document.getElementById("app");

const app: App = new App(HTML_APP);

app.fileLoader();

export default app;
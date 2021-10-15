import app from "../main";

//  HTML
const REGISTER_FORM: HTMLFormElement = document.getElementById(
  "js-registerForm"
) as HTMLFormElement;

export default async function registerHandler(): Promise<void> {
  const { email, password, passwordRepeat } = Object.fromEntries(
    new FormData(REGISTER_FORM).entries()
  ) as { [index: string]: string };

  if (password === passwordRepeat) {
    const response = await app.users.registerUser(email, password);

    return alert(response ? response : "Registrado con Éxito");
  }

  alert("Las contraseñas no coinciden.");
}

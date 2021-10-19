import app from "../main";

//  HTML
const REGISTER_FORM: HTMLFormElement = document.getElementById(
  "js-registerForm"
) as HTMLFormElement;

export default async function registerHandler(): Promise<void> {
  const { email, password, passwordRepeat } = Object.fromEntries(
    new FormData(REGISTER_FORM).entries()
  ) as { [index: string]: string };

  if (email && password === passwordRepeat) {
    const response = await app.users.registerUser(email, password);

    console.log(response)
    if (response) {
      return alert(response);
    }

    return alert("Registrado con Éxito");
  }

  return alert("Las contraseñas no coinciden.");
}

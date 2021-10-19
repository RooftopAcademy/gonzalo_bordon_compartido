import app from "../main";

//  HTML
const LOGIN_FORM: HTMLFormElement = document.getElementById(
  "js-loginForm"
) as HTMLFormElement;

export default async function loginHandler(): Promise<void> {
  const { email, password } = Object.fromEntries(
    new FormData(LOGIN_FORM).entries()
  ) as {
    [index: string]: string;
  };
  const response = await app.users.loginUser(email, password);

  return alert(response ? response : "Logueado con Éxito");
}

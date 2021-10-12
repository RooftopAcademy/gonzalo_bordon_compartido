import app from "../main";

export default function apiErrorHandler(
    errorMessage: string
): void {
    alert(errorMessage);
    app.errorLoader();
}
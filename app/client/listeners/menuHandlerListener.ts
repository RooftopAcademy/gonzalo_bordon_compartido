//  HTML
const MENU_HANDLERS_BUTTONS: HTMLCollectionOf<Element> = document.getElementsByClassName("openNav-button");
const MENU_CONTAINER: HTMLElement = document.getElementById("nav-container");

//  CSS CLASES
const MENU_CONTAINER_CLASS_SHOW: string = "active";

//  EVENTS
const MENU_HANDLERS_BUTTONS_EVENT: string = "click";

export default function menuHandlerListener(): void {
    Array.from(MENU_HANDLERS_BUTTONS).forEach((button: Element) => {
        button.addEventListener(
            MENU_HANDLERS_BUTTONS_EVENT, 
            (): void => {
                MENU_CONTAINER.classList.toggle(MENU_CONTAINER_CLASS_SHOW)
            }
        )
    });
}
import { Button } from './button.js';
class NavigationBar {
    constructor(id, className, buttons) {
        this.buttons = [];
        this.element = document.createElement('nav');
        this.element.id = `${id}-navigation-bar`;
        this.element.className = className;

        for (let key in buttons) {
            let button = new Button(`${id}-button`, buttons[key], key);
            this.buttons.push(button);
            this.element.appendChild(button.element);
        }
    }
}
export { NavigationBar };
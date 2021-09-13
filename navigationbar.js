class NavigationBar {
    constructor(id, buttons) {
        this.buttons = [];
        this.element = document.createElement('nav');
        this.element.id = id;
        this.element.className = `${id}-navigation-bar`;

        for (let key in buttons) {
            let button = new Button(`${id}-button`, buttons[key], key);
            this.buttons.push(button);
            this.element.appendChild(button.element);
        }
    }
}
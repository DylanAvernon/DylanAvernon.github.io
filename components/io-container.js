import { Container } from './container.js';
class IoContainer {
    constructor(id, className) {
        this.element = document.createElement('div');
        this.inputContainer = new Container(`${id}-input`, `${className}-subcontainer`);
        this.outputContainer = new Container(`${id}-output`, `${className}-subcontainer`);

        this.element.id = id;
        this.element.className = className;

        this.element.appendChild(this.inputContainer.element);
        this.element.appendChild(this.outputContainer.element);
    }
}
export { IoContainer };
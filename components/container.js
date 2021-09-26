class Container {
    constructor(id, className) {
        this.element = document.createElement('div');
        this.element.id = `${id}-container`;
        this.element.className = className;
    }
}
export { Container };
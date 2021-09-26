class Header3 {
    constructor(id, className, title) {
        this.element = document.createElement('h3');
        this.element.id = id;
        this.element.className = className;
        this.element.textContent = title;
    }
}
export { Header3 };
class RepoLink {
    constructor(id, classList, structure) {
        this.classList = classList;
        this.id = id;
        this.href = structure.href;
        this.textContent = structure.textContent;
        this.element = document.createElement('a');
    }
    render() {
        this.element.id = this.id;
        this.element.textContent = this.textContent;
    }
    style() {
        this.element.classList.add(...this.classList);
    }
    activate() {
        this.element.href = this.href;
        this.element.target = '_blank';
    }
}

export { RepoLink };
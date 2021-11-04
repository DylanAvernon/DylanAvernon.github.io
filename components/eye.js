class Eye {
    constructor(ids, classList) {
        this.element = document.createElement('div');
        this.ball = document.createElement('div');
        this.ids = ids;
        this.classList = classList;
    }
    render() {
        this.element.id = this.ids.eye;
        this.ball.id = this.ids.ball;
        this.element.appendChild(this.ball);
    }
    style() {
        this.element.classList.add(...this.classList.eye);
        this.ball.classList.add(...this.classList.ball);
    }
}

export { Eye };
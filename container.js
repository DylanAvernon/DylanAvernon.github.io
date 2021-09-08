class Container {
    constructor() {
        this.container = document.createElement('div');
        this.title = document.createElement('h2');
        this.title.innerHTML = 'Simple Simulation';
        this.container.className = 'container';
        this.container.style.position = 'relative';
        this.container.style.borderStyle = 'solid';
        this.container.style.borderWidth = '3px';
        this.container.style.left = '11px';
        this.container.style.width = '500px';
        this.container.style.height = '500px';
        this.container.appendChild(this.title);
        document.body.appendChild(this.container);
    }
}
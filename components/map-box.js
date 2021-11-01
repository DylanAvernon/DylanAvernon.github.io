import { Header3 } from './header3.js';
import { NavigationBar } from './navigationbar.js';
import { Container } from './container.js';
import { RepoLink } from './repo-link.js';

class MapBox {
    constructor(structure) {
        // Create project div
        this.element = document.createElement('div');
        this.ids = structure.ids;
        this.classList = structure.classList;

        this.header3 = new Header3(structure.ids.header3, structure.classList.header3, structure.title);
        this.navigationBar = new NavigationBar(structure.ids.navigationBar, structure.classList.navigationBar, structure.buttons);
        this.container = new Container(structure.ids.container, structure.classList.container);
        this.repoLink = new RepoLink(structure.ids.repoLink, structure.classList.repoLink, structure.repoLink);
    }

    render() {
        this.element.id = this.ids.map;

        this.header3.render();
        this.navigationBar.render();
        this.container.render();
        this.repoLink.render();

        this.element.appendChild(this.header3.element);
        this.element.appendChild(this.navigationBar.element);
        this.element.appendChild(this.container.element);
        this.element.appendChild(this.repoLink.element);
    }

    style() {
        this.element.classList.add(...this.classList.map);
        this.header3.style();
        this.navigationBar.style();
        this.container.style();
        this.repoLink.style();
    }

    activate() {
        this.navigationBar.activate();
        this.repoLink.activate();
    }
}

export { MapBox };
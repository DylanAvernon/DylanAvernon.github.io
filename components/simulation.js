import { Header3 } from './header3.js';
import { NavigationBar } from './navigationbar.js';
import { Container } from './container.js';
class Simulation {
    constructor(structure) {
        this.buttons = structure.buttons;

        // Create project div
        this.element = document.createElement('div');
        this.element.id = structure.id;
        this.element.className = 'simulation';

        // Create project header
        this.header3 = new Header3(`${this.element.id}-header3`, `${this.element.className}-header3`, structure.title);
        this.element.appendChild(this.header3.element);

        // Create navigation bar
        this.navigationBar = new NavigationBar(this.element.id, 'navigation-bar', this.buttons);
        this.element.appendChild(this.navigationBar.element);

        // Create container
        this.container = new Container(this.element.id, 'container');
        this.element.appendChild(this.container.element);
    }
}
export { Simulation };
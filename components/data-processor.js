import { Header3 } from './header3.js';
import { NavigationBar } from './navigationbar.js';
import { IoContainer } from './io-container.js';
class DataProcessor {
    constructor(structure) {
        this.buttons = structure.buttons;

        // Create project div
        this.element = document.createElement('div');
        this.element.id = structure.id;
        this.element.className = 'data-processor';

        // Create project header
        this.header3 = new Header3(`${this.element.id}-header3`, `${this.element.className}-header3`, structure.title);
        this.element.appendChild(this.header3.element);

        // Create navigation bar
        this.navigationBar = new NavigationBar(this.element.id, this.buttons);
        this.element.appendChild(this.navigationBar.element);

        // Create container
        this.container = new IoContainer(this.element.id, 'io-container');
        this.element.appendChild(this.container.element);
    }
}
export { DataProcessor };
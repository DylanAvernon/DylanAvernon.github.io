import { TextProcessor } from '../../components/text-processor.js';
let letterCounterStructure = {
    title: 'Letter Counter',
    buttons: {
        'Add Text': function addText() {
            let inputContainer= letterCounterProperties.project.container.inputContainer.element;
            let newText = prompt("Please type in some text.");
            inputContainer.textContent += newText;
        },
        'Count Letters': function countLetters() {
            let inputContainer = letterCounterProperties.project.container.inputContainer.element;
            let outputContainer = letterCounterProperties.project.container.outputContainer.element;
            let content = inputContainer.textContent;
            content = content.replace(/[^a-zA-Z]/g, '');
            let count = content.length;
            outputContainer.textContent = `Letter Count: ${count} letter(s)`;
        },
        'Remove Text': function removeText() {
            let inputContainer = letterCounterProperties.project.container.inputContainer.element;
            inputContainer.textContent = '';
            letterCounterStructure.buttons['Count Letters']();
        }
    },
    repoLink: {
        href: 'https://github.com/DylanAvernon/letter-counter',
        textContent: 'GitHub Repo'
    },
    classList: {
        textProcessor: ['text-processor'],
        header3: ['header3'],
        navigationBar: {
            navigationBar: ['navigation-bar'],
            buttons: {
                'Add Text': ['add-text-button', 'btn', 'btn-primary'],
                'Count Letters': ['count-letters-button', 'btn', 'btn-secondary'],
                'Remove Text': ['remove-text-button', 'btn', 'btn-danger']
            }
        },
        ioContainer: {
            ioContainer: ['io-container'],
            inputContainer: ['io-container-subcontainer'],
            outputContainer: ['io-container-subcontainer']
        },
        repoLink: ['repo-link', 'link-info']
    },
    ids: {
        textProcessor: 'letter-counter',
        header3: 'letter-counter-header3',
        navigationBar: {
            navigationBar: 'letter-counter-navigation-bar',
            buttons: {
                'Add Text': 'letter-counter-add-text-button', 
                'Count Letters': 'letter-counter-count-button', 
                'Remove Text': 'letter-counter-remove-text-button'
            }
        },
        ioContainer: {
            ioContainer: 'letter-counter-io-container',
            inputContainer: 'letter-counter-input-container',
            outputContainer: 'letter-counter-output-container'
        },
        repoLink: 'letter-counter-repo-link'
    }
}

let letterCounterProperties = {
        project: new TextProcessor(letterCounterStructure)
}

letterCounterProperties.project.render();
letterCounterProperties.project.style();
letterCounterProperties.project.activate();

export { letterCounterProperties };
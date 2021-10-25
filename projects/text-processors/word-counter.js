import { TextProcessor } from '../../components/text-processor.js';
let wordCounterStructure = {
    title: 'Word Counter',
    buttons: {
        'Add Text': function addText() {
            let inputContainer= wordCounterProperties.project.container.inputContainer.element;
            let newText = prompt("Please type in some text.");
            inputContainer.textContent += newText;
        },
        'Count Words': function countWords() {
            let inputContainer = wordCounterProperties.project.container.inputContainer.element;
            let outputContainer = wordCounterProperties.project.container.outputContainer.element;
            let content = inputContainer.textContent;
            let count = 0;
            content = content.replace(/[^a-zA-Z ]/g, ' ');
            content = content.split(' ');
            content.forEach((word) => {
                if (word !== '') {
                    count += 1;
                }
            });
            outputContainer.textContent = `Word Count: ${count} word(s)`;
        },
        'Remove Text': function removeText() {
            let inputContainer = wordCounterProperties.project.container.inputContainer.element;
            inputContainer.textContent = '';
            wordCounterStructure.buttons['Count Words']();
        }
    },
    classList: {
        textProcessor: ['text-processor'],
        header3: ['header3'],
        navigationBar: {
            navigationBar: ['navigation-bar'],
            buttons: {
                'Add Text': ['add-text-button', 'btn', 'btn-primary'],
                'Count Words': ['count-words-button', 'btn', 'btn-secondary'],
                'Remove Text': ['remove-text-button', 'btn', 'btn-danger']
            }
        },
        ioContainer: {
            ioContainer: ['io-container'],
            inputContainer: ['io-container-subcontainer'],
            outputContainer: ['io-container-subcontainer']
        }
    },
    ids: {
        textProcessor: 'word-counter',
        header3: 'word-counter-header3',
        navigationBar: {
            navigationBar: 'word-counter-navigation-bar',
            buttons: {
                'Add Text': 'word-counter-add-text-button', 
                'Count Words': 'word-counter-count-button', 
                'Remove Text': 'word-counter-remove-text-button'
            }
        },
        ioContainer: {
            ioContainer: 'word-counter-io-container',
            inputContainer: 'word-counter-input-container',
            outputContainer: 'word-counter-output-container'
        }
    }
}

let wordCounterProperties = {
        project: new TextProcessor(wordCounterStructure)
}

wordCounterProperties.project.render();
wordCounterProperties.project.style();
wordCounterProperties.project.activate();

export { wordCounterProperties };
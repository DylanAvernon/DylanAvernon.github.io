import { TextProcessor } from '../../components/text-processor.js';
let sentenceCounterStructure = {
    title: 'Sentence Counter',
    buttons: {
        'Add Text': function addText() {
            let inputContainer= sentenceCounterProperties.project.container.inputContainer.element;
            let newText = prompt("Please type in some text.");
            inputContainer.textContent += newText;
        },
        'Count Sentences': function countSentences() {
            let inputContainer = sentenceCounterProperties.project.container.inputContainer.element;
            let outputContainer = sentenceCounterProperties.project.container.outputContainer.element;
            let content = inputContainer.textContent;
            let count = 0;
            content = content.split(/\s/);
            content.forEach((word) => {
                if (word.length > 1 && word[word.length-1] === '!' || word[word.length-1] === '?'|| word[word.length-1] === '.') {
                    count += 1;
                } 
            })
            outputContainer.textContent = `Sentence Count: ${count} sentence(s)`;
        },
        'Remove Text': function removeText() {
            let inputContainer = sentenceCounterProperties.project.container.inputContainer.element;
            inputContainer.textContent = '';
            sentenceCounterStructure.buttons['Count Sentences']();
        }
    },
    classList: {
        textProcessor: ['text-processor'],
        header3: ['header3'],
        navigationBar: {
            navigationBar: ['navigation-bar'],
            buttons: {
                'Add Text': ['add-text-button', 'btn', 'btn-primary'],
                'Count Sentences': ['count-sentences-button', 'btn', 'btn-secondary'],
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
        textProcessor: 'sentence-counter',
        header3: 'sentence-counter-header3',
        navigationBar: {
            navigationBar: 'sentence-counter-navigation-bar',
            buttons: {
                'Add Text': 'sentence-counter-add-text-button', 
                'Count Sentences': 'sentence-counter-count-button', 
                'Remove Text': 'sentence-counter-remove-text-button'
            }
        },
        ioContainer: {
            ioContainer: 'sentence-counter-io-container',
            inputContainer: 'sentence-counter-input-container',
            outputContainer: 'sentence-counter-output-container'
        }
    }
}

let sentenceCounterProperties = {
        project: new TextProcessor(sentenceCounterStructure)
}

sentenceCounterProperties.project.render();
sentenceCounterProperties.project.style();
sentenceCounterProperties.project.activate();

export { sentenceCounterProperties };
import { DataProcessor } from '../components/data-processor.js';
let wordCounterStructure = {
    id: 'word-counter',
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
            content = content.replace(/[^a-zA-Z ]/g, '');
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
    }
}

let wordCounterProperties = {
        project: new DataProcessor(wordCounterStructure)
}
document.getElementById('text-processors').appendChild(wordCounterProperties.project.element);
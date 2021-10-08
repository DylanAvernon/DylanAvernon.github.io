import { TextProcessor } from '../../components/text-processor.js';
let letterCounterStructure = {
    id: 'letter-counter',
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
    }
}

let letterCounterProperties = {
        project: new TextProcessor(letterCounterStructure)
}

export { letterCounterProperties };
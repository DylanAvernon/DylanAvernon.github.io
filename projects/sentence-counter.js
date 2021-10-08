import { TextProcessor } from '../components/text-processor.js';
let sentenceCounterStructure = {
    id: 'sentence-counter',
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
    }
}

let sentenceCounterProperties = {
        project: new TextProcessor(sentenceCounterStructure)
}
document.getElementById('text-processors').appendChild(sentenceCounterProperties.project.element);
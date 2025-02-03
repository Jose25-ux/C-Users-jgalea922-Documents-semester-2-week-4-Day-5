const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const charCount = document.getElementById('charCount');

// Convert text to uppercase
function toUpperCase() {
    const text = inputText.value;
    outputText.innerHTML = text.toUpperCase();
}

// Convert text to lowercase
function toLowerCase() {
    const text = inputText.value;
    outputText.innerHTML = text.toLowerCase();
}

// Convert text to capitalize each word
function capitalizeWords() {
    const text = inputText.value;
    outputText.innerHTML = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Remove extra spaces
function removeExtraSpaces() {
    const text = inputText.value;
    outputText.innerHTML = text.split(' ').filter(word => word !== '').join(' ');
}

// Replace a specific word with another word
function replaceWord() {
    const text = inputText.value;
    const oldWord = prompt('Enter the word you want to replace');
    const newWord = prompt('Enter the word you want to replace with');
    outputText.innerHTML = text.replace(new RegExp(oldWord, 'g'), newWord);
}

// Count the number of characters in the text
function updateCharCount() {
    const text = outputText.innerHTML || inputText.value;
    charCount.innerHTML = `Character Count: ${text.length}`;
}
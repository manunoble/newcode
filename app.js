function convertBase() {
    // Get values from the input field and dropdowns
    const inputNumber = document.getElementById('inputNumber').value;
    const fromBase = parseInt(document.getElementById('fromBase').value);
    const toBase = parseInt(document.getElementById('toBase').value);
    
    // Validate the input
    if (!inputNumber || isNaN(parseInt(inputNumber, fromBase))) {
        document.getElementById('result').innerText = "Invalid input for the selected base!";
        return;
    }
    
    // Convert the number
    const convertedNumber = parseInt(inputNumber, fromBase).toString(toBase).toUpperCase();
    
    // Display the result
    document.getElementById('result').innerText = `Converted Result: ${convertedNumber}`;
    
    // Add to history
    addHistory(inputNumber, fromBase, convertedNumber, toBase);
}

function addHistory(input, fromBase, result, toBase) {
    const historyDiv = document.getElementById('history');
    const historyItem = document.createElement('p');
    historyItem.innerText = `${input} (Base ${fromBase}) ➔ ${result} (Base ${toBase})`;
    historyDiv.appendChild(historyItem);
}

function convertBase() {
    // Get values from the input field and dropdowns
    const inputNumber = document.getElementById('inputNumber').value;
    const fromBase = parseInt(document.getElementById('fromBase').value);
    const toBase = parseInt(document.getElementById('toBase').value);

}
    
    // Validate the input
    if (!inputNumber || isNaN(parseInt(inputNumber, fromBase))) {
        document.getElementById('result').innerText = "Invalid input for the selected base!";
        return;
    }

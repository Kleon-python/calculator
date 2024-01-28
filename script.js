function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function calculateResult() {
    try {
        // Use eval for basic mathematical evaluations
        document.getElementById('display').innerText = eval(document.getElementById('display').innerText);
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
    }
}
function backspace() {
    var currentDisplay = document.getElementById('display').innerText;
    document.getElementById('display').innerText = currentDisplay.slice(0, -1);
}

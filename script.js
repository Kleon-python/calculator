const math = require('mathjs');

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        // Use the math.evaluate function for safe mathematical evaluations
        display.value = math.evaluate(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

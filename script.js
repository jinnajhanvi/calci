function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        const display = document.getElementById('display');
        display.value = eval(display.value);
    } catch (error) {
        alert('Invalid calculation');
    }
}

function calculateSqrt() {
    const display = document.getElementById('display');
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        alert('Invalid input for square root');
    }
}

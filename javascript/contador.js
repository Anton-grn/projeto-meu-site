var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function changeColor() {
    if (currentNumberWrapper < 0) {
        return currentNumber.style.color = "#ff0000";
    }
}

currentNumber.addEventListener('click', changeColor);

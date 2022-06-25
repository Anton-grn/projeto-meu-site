let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    if (currentNumber > 0) {
        currentNumberWrapper.style.color = '#32CD32'
    } else currentNumberWrapper.style.color = 'black'
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    } else currentNumberWrapper.style.color = 'black';
    
    currentNumberWrapper.innerHTML = currentNumber;
}

function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(button.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode)
let screenValue = "";
let screen = document.querySelector('.screen');

function writeOnScreen(c){
    let num = document.querySelector(c);
    screenValue+=num.textContent;
    screen.textContent = screenValue;
}

function getResult(){
    let result = eval(screenValue);
    screenValue = result;
    screen.textContent = screenValue;
}

function clearScreen(){
    screenValue = "";
    screen.textContent = screenValue;
}

function deleteDigit(){
    screenValue = screenValue.slice(0, (screenValue.length - 1));
    screen.textContent = screenValue;
}
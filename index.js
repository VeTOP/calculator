function add(a, b){
    return +a + +b;
}

function subtract(a, b){
    return +a - +b;
}

function multiply(a, b){
    return +a * +b;
}

function divide(a, b){
    return +a / +b;
}

function operate(operator, a, b){
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
}

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
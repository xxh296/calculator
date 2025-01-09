const UiText = {
    1: "1", 
    2: "2", 
    3: "3", 
    4: "4", 
    5: "5", 
    6: "6", 
    7: "7", 
    8: "8", 
    9: "9", 
    0: "0", 
    EQUAL: "=", 
    PLUS: "+", 
    MINUS: "-", 
    MULTIPLY: "*", 
    DIVIDE: "/",      
    AC: "AC", 
    NEGATIVE_POSITIVE: "+/-", 
    PERCENT: "%", 
    DOT:".", 
    BACKSPACE: "<bsp",
};


/*
const Operator = {
    ADD: " + ",
    SUBTRACT: " - ",
    MULTIPLY: " * ",
    DIVIDE: " / ",
}
*/
const num1 = 0;
const num2 = 0;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operation, num1, num2) {
    switch (operation) {
        case add:
            return add(num1, num2);
        case subtract:
            return subtract(num1, num2);
        case multiply:
            return multiply(num1, num2);
        case divide:
            return divide(num1, num2);
        default:
            return "ERROR: Invslid input."
    }
}
const UiText = {
    SEVEN: "7",
    EIGHT: "8",
    NINE: "9",
    PLUS: "+",
    AC: "AC",
    FOUR: "4",
    FIVE: "5",
    SIX: "6",
    MINUS: "-",
    NEGATIVE_POSITIVE: "+/-",
    ONE: "1",
    TWO: "2",
    THREE: "3",
    MULTIPLY: "*",
    PERCENT: "%",
    ZERO: "0",
    DOT: ".",
    EQUAL: "=",
    DIVIDE: "/",
    BACKSPACE: "\u2190"
};

const keypad = document.querySelector("#keypad");
const display = document.querySelector("#display");
let num1 = 0;
let num2 = 0;
let tempNumber = 0;
let operator = "";
let isResult = false;
let runningTotal = 0;
let operationKeyPress = false;

function placeKeys(){
    const keys = Object.keys(UiText);  // Get keys from UiText
    for (let i = 0; i < keys.length; i++) {
        display.innerText = Number(0);
        const key = document.createElement("div");
        key.style.width = "85px";
        key.style.height = "85px";
        key.style.aspectRatio = "1/1";
        key.textContent = UiText[keys[i]]; 
        key.style.border = "3px solid black";

        const btnColorNumbers = "rgb(130,130,130)";
        const btnColorOps = "rgb(130,140,150)";

        if (/^\d$/.test(key.innerText)){
            key.style.backgroundColor = btnColorNumbers;
            key.style.borderColor = "rgb(80,80,80)";
            key.style.fontWeight = 300;

        } else {
            key.style.backgroundColor = btnColorOps;
            key.style.borderColor = "darkorange";
            key.style.fontWeight = 800;
        }

        key.addEventListener("click", () => {
            key.style.backgroundColor = "rgb(180,180,180";
            if (/^[\d.]$/.test(key.innerText)) {
                operationKeyPress = false;
                if (key.innerText === "." && tempNumber.toString().includes(".")) {
                    console.log("ERROR: \".\" character already exists.");
                } else if (display.innerText.length <= 11){
                    if (display.innerText == 0){
                        display.innerText = "";
                        display.innerText += key.innerText;
                        tempNumber = Number(display.innerText);
                    }else {
                        if (isResult){
                            display.innerText = "";
                            isResult = false;
                        }
                        if (num2 == 0 && num1 != 0 && tempNumber ==0){
                            display.innerText = "";
                            display.innerText += key.innerText;
                            tempNumber = Number(display.innerText);
                        } else {
                            display.innerText += key.innerText;
                            tempNumber = Number(display.innerText);
                        }                        
                    }  
                } else {
                    console.log("ERROR: Display is full.")
                }
            }
            if (!/^[\d.]$/.test(key.innerText)){
                switch (key.innerText){
                    case UiText.AC:
                        clear();
                        break

                    case UiText.NEGATIVE_POSITIVE:
                        if (display.innerText && !operationKeyPress){
                            display.innerText *= -1;
                            tempNumber *= -1; 
                        }
                        break

                    case UiText.PERCENT: 
                        if (display.innerText){
                            display.innerText *= 0.01;
                            tempNumber *= 0.01; 
                        }
                        break

                    case UiText.BACKSPACE:
                        if (display.innerText){
                            display.innerText = display.innerText.slice(0, -1);
                        }

                        if (display.innerText == "" || display.innerText == "-"){
                            display.innerText = 0;
                        }
                        tempNumber = Number(display.innerText);
                        break

                    case UiText.PLUS:                   
                        operator = add;

                        if (runningTotal == 0){
                            runningTotal = Number(display.innerText);
                        } else {
                            display.innerText = operate(operator, runningTotal, Number(display.innerText));
                            runningTotal = Number(display.innerText);
                            // console.log("runningTotal, plus: " + runningTotal);
                        }

                        if (tempNumber){
                            num1 = tempNumber;
                            tempNumber = 0;
                            // display.innerText = num1;
                        }
                        operationKeyPress = true;
                        break
                        
                    case UiText.MINUS:                   
                        operator = subtract;

                        if (runningTotal == 0){
                            runningTotal = Number(display.innerText);
                        } else {
                            display.innerText = operate(operator, runningTotal, Number(display.innerText));
                            runningTotal = Number(display.innerText);
                            // console.log("runningTotal, minus: " + runningTotal);
                        }

                        if (tempNumber){
                            num1 = tempNumber;
                            tempNumber = 0;
                            // display.innerText = num1;
                        }
                        operationKeyPress = true;
                        break
                    
                    case UiText.MULTIPLY:                   
                        operator = multiply;
                        if (runningTotal == 0){
                            runningTotal = Number(display.innerText);
                        } else {
                            display.innerText = operate(operator, runningTotal, Number(display.innerText));
                            runningTotal = Number(display.innerText);
                            // console.log("runningTotal, minus: " + runningTotal);
                        }

                        if (tempNumber){
                            num1 = tempNumber;
                            tempNumber = 0;
                            // display.innerText = num1;
                        }
                        operationKeyPress = true;
                        break

                    case UiText.DIVIDE: 
                    operator = divide;                  
                    if (runningTotal == 0){
                        runningTotal = Number(display.innerText);
                    } else {
                        display.innerText = operate(operator, runningTotal, Number(display.innerText));
                        runningTotal = Number(display.innerText);
                        // console.log("runningTotal, minus: " + runningTotal);
                    }

                    if (tempNumber){
                        num1 = tempNumber;
                        tempNumber = 0;
                        // display.innerText = num1;
                    }
                    operationKeyPress = true;
                        break
                        
                    case UiText.EQUAL:
                        if (isResult == false){
                            display.innerText = operate(operator, runningTotal, Number(display.innerText));  
                            tempNumber = 0;
                            num1 = 0;
                            num2 = 0;
                            runningTotal = 0;
                            isResult = true;
                        }


                    // runningTotal = 0;
                    // clear();  

                        // if (num1){
                        //     num2 = tempNumber;
                        //     display.innerText = operate(operator, num1, num2); 
                        //     tempNumber = 0;
                        //     num1 = 0;
                        //     num2 = 0;
                        //     isResult = true;
                        // }   
                        operationKeyPress = false;                  
                        break 
                }
            }      
            setTimeout(() => {
                if (/^\d$/.test(key.innerText)) {
                    key.style.backgroundColor = btnColorNumbers;
                } else {
                    key.style.backgroundColor = btnColorOps;
                }
            }, 50);
        });

        keypad.appendChild(key);        
    }
}

placeKeys();

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        return "Div by 0 error.\nPress AC key.";
    }
    return a / b;
};

const clear = () => {
    tempNumber = 0;
    display.innerText = Number(0);
    isResult = false;
    runningTotal = 0;
}

function operate(operation, num1, num2){
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
            return "Invalid input"
    }
}
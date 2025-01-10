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
                if (key.innerText === "." && display.innerText.includes(".")) {
                    console.log("ERROR: \".\" character already exists.");
                } else if (display.innerText.length <= 11){
                    console.log("tempNumber: " + tempNumber);
                    console.log("num1: " + num1);
                    console.log("num2: " + num2);
                    console.log("display.innerText: " + display.innerText);
                    if (display.innerText == 0){
                        display.innerText = "";
                        display.innerText += key.innerText;
                        tempNumber = Number(display.innerText);

                        console.log("tempNumber: " + tempNumber);
                        console.log("num1: " + num1);
                        console.log("num2: " + num2);
                        console.log("display.innerText: " + display.innerText);
                    }else {
                        if (num2 == 0 && num1 != 0 && tempNumber ==0){
                            display.innerText = "";
                            display.innerText += key.innerText;
                            tempNumber = Number(display.innerText);

                            console.log("tempNumber: " + tempNumber);
                            console.log("num1: " + num1);
                            console.log("num2: " + num2);
                            console.log("display.innerText: " + display.innerText);
                        } else {
                            display.innerText += key.innerText;
                            tempNumber = Number(display.innerText);

                            console.log("tempNumber: " + tempNumber);
                            console.log("num1: " + num1);
                            console.log("num2: " + num2);
                            console.log("display.innerText: " + display.innerText);
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
                        if (num2 != 0) {
                            display.innerText = num2 * -1;
                            num2 *= -1;
                        } else if(num1 != 0){
                            display.innerText = num1 * -1;
                            num1 *= -1;
                        } else if (display.innerText != 0){
                            display.innerText = display.innerText * -1;
                        }
                        break

                    case UiText.PERCENT: 
                        if (num2 != 0) {
                            display.innerText = num2 * 0.01;
                            num2 *= 0.01;
                        } else if(num1 != 0){
                            display.innerText = num1 * 0.01;
                            num1 *= 0.01;
                        } else if (display.innerText != 0){
                            display.innerText = display.innerText * 0.01;
                        }
                        break

                    case UiText.BACKSPACE:
                        if (num2 != 0) {
                            display.innerText = num2.toString().slice(0, -1);
                            // if (!display.innerText) {
                            //     display.innerText = "0";
                            // }
                            num2 = Number(display.innerText);
                        } else if(num1 != 0){
                            display.innerText = num1.toString().slice(0, -1);
                            // if (!display.innerText) {
                            //     display.innerText = "0";
                            // }
                            num1 = Number(display.innerText);
                        } else if (display.innerText != 0){
                            display.innerText = display.innerText.slice(0, -1);
                            // if (!display.innerText) {
                            //     display.innerText = "0";
                            // }
                        }
                        break

                    case UiText.PLUS:                   
                        operator = add;
                        num1 = tempNumber;
                        tempNumber = 0;
                        display.innerText = num1;

                        console.log("tempNumber: " + tempNumber);
                        console.log("num1: " + num1);
                        console.log("num2: " + num2);
                        console.log("display.innerText: " + display.innerText);
                        // clear();                            
                        break
                        
                    case UiText.MINUS:                   
                        operator = subtract;
                        num1 = tempNumber;
                        tempNumber = 0;
                        display.innerText = num1;

                        console.log("tempNumber: " + tempNumber);
                        console.log("num1: " + num1);
                        console.log("num2: " + num2);
                        console.log("display.innerText: " + display.innerText);
                        // clear();                            
                        break
                    
                    case UiText.MULTIPLY:                   
                        operator = multiply;
                        num1 = tempNumber;
                        tempNumber = 0;
                        display.innerText = num1;

                        console.log("tempNumber: " + tempNumber);
                        console.log("num1: " + num1);
                        console.log("num2: " + num2);
                        console.log("display.innerText: " + display.innerText);
                        // clear();                            
                        break

                    case UiText.DIVIDE:                   
                        operator = divide;
                        num1 = tempNumber;
                        tempNumber = 0;
                        display.innerText = num1;

                        console.log("tempNumber: " + tempNumber);
                        console.log("num1: " + num1);
                        console.log("num2: " + num2);
                        console.log("display.innerText: " + display.innerText);
                        // clear();                            
                        break
                        
                    case UiText.EQUAL:
                        num2 = tempNumber;
                        // console.log("tempNumber is: " + tempNumber);
                        // console.log("num2 is: " + num2);
                        // display.innerText += UiText.EQUAL;
                        display.innerText = operate(operator, num1, num2); 
                        tempNumber = 0;
                        num1 = 0;
                        num2 = 0;
                        break 
                }
            }      
            // restore the original color
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
const divide = (a, b) => a / b;
const clear = () => display.innerText = Number(0);

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
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
    BACKSPACE: "<<"
};

const keypad = document.querySelector("#keypad");
const display = document.querySelector("#display");

function placeKeys(){
    const keys = Object.keys(UiText);  // Get keys from UiText
    for (let i = 0; i < keys.length; i++) {
        const key = document.createElement("div");
        key.style.width = "85px";
        key.style.height = "85px";
        key.style.aspectRatio = "1/1";
        // key.style.backgroundColor = "gray";
        // key.classList.add("key");
        key.textContent = UiText[keys[i]]; 
        key.style.border = "3px solid black";

        const btnColorNumbers = "rgb(130,130,130)";
        const btnColorOps = "rgb(130,140,150)";

        if (/^\d$/.test(key.innerText)){
            key.style.backgroundColor = btnColorNumbers;
            key.style.borderColor = "rgb(80,80,80)";
        } else {
            key.style.backgroundColor = btnColorOps;
            key.style.borderColor = "orange";
            // key.style.borderColor = "rgb(50,70,55)";
        }

        key.addEventListener("click", () => {
            key.style.backgroundColor = "rgb(180,180,180";
            if (/^[\d.]$/.test(key.innerText)) {
                if (key.innerText === "." && display.innerText.includes(".")) {
                    console.log("ERROR: \".\" character already exists.");
                } else if (display.innerText.length <= 12){
                    display.innerText += key.innerText;
                    num1 = Number(display.innerText);
                } else {
                    console.log("ERROR: Display is full.")
                }
            }

            if (!/^[\d.]$/.test(key.innerText)){
                switch (key.innerText){
                    case UiText.AC:
                        clear();
                        break
                    case UiText.NEGATIVE_POSITIVE: // test, if num2 and num1 need a string conversion
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
                    case UiText.PERCENT: // same test as above
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


                }


                // if (key.innerText == UiText.AC || key.innerText == UiText.EQUAL){
                //     clear();
                // }
                
                // console.log("Add the operations logic.")
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


/*
const Operator = {
    ADD: " + ",
    SUBTRACT: " - ",
    MULTIPLY: " * ",
    DIVIDE: " / ",
}
*/
let num1 = 0;
let num2 = 0;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const clear = () => display.innerText = "";

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
            return "ERROR: Invslid input."
    }
}
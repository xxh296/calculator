// const UiText = {
//     1: "1", 
//     2: "2", 
//     3: "3", 
//     4: "4", 
//     5: "5", 
//     6: "6", 
//     7: "7", 
//     8: "8", 
//     9: "9", 
//     0: "0", 
//     EQUAL: "=", 
//     PLUS: "+", 
//     MINUS: "-", 
//     MULTIPLY: "*", 
//     DIVIDE: "/",      
//     AC: "AC", 
//     NEGATIVE_POSITIVE: "+/-", 
//     PERCENT: "%", 
//     DOT:".", 
//     BACKSPACE: "<bsp",
// };

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

function placeKeys(){
    const keys = Object.keys(UiText);  // Get keys from UiText
    for (let i = 0; i < keys.length; i++) {
        const key = document.createElement("div");
        key.style.width = "85px";
        key.style.height = "85px";
        key.style.aspectRatio = "1/1";
        key.style.backgroundColor = "gray";
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
            // Change the background color to black when clicked
            key.style.backgroundColor = "black";
        
            // Use a timeout to restore the original color after 300ms
            setTimeout(() => {
                if (/^\d$/.test(key.innerText)) {
                    // Restore to number button color after click
                    key.style.backgroundColor = btnColorNumbers;
                } else {
                    // Restore to operation button color after click
                    key.style.backgroundColor = btnColorOps;
                }
            }, 300);  // 300ms delay before returning to the original color
        });

        // key.addEventListener("click", ()=>{
        //     key.style.backgroundColor = "black);
        //     if (/^\d$/.test(key.innerText)){
        //         setTimeout(() => {
        //             key.style.backgroundColor = btnColorNumbers;
        //         }, 300);            
        //     } else {
        //         setTimeout(() => {
        //             key.style.backgroundColor = btnColorOps;
        //         }, 300);
        //     }
        // });

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
const num1 = 0;
const num2 = 0;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

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
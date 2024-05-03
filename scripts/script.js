
let operation = [];
let signOn = false;

let currentValue = "";
let nextValue = "";

const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")
const display = document.querySelector(".display");

const buttons = document.querySelectorAll(".number");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        display.textContent = button.textContent;

        let item = display.textContent;
    

        if(typeof(checkIfOperator(item)) === "number"){

            console.log(operation)
            currentValue += item; 

            console.log(currentValue)
            display.textContent = currentValue;
        }
        if(checkIfOperator(item) === true){


            if(operation.length !== 1){

              operation.push(checkIfOperator(currentValue));
              nextValue = currentValue;
              currentValue = "";
            }

            console.log(operation)
            operation.push(item)
        }

        if(operation.length >= 3){
            console.log(operation)
            if (operate(...operation) === "Div0"){
                display.textContent = "Division by 0"
                operation = []
                return;
            }
            result = operate(...operation);
            display.textContent = result
            operation = [result, item];
        }
        
    })
})

clear.addEventListener("click", () => {
    display.textContent = "0"
    currentValue = ""
    nextValue = ""
    operation = []
})


equal.addEventListener("click", () => {
    if(currentValue != ""){
        operation.push(parseInt(currentValue));
        nextValue = currentValue;
        currentValue = "";

        console.log(operation)
        if (operate(...operation) === "Div0"){
            display.textContent = "Division by 0"
            operation = []
            return;
        }
        result = operate(...operation);
        display.textContent = result
        operation = [result];

        console.log(operation)
    }
})

function checkIfOperator(string) {
    if(string === "+" ||string === "-" || string === "*" || string === "/" || string === "="){
        return true;
    }
    else{
        return parseInt(string);
    }
}


function operate(x, operator, y){
    switch (operator){
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x,y);
    }
}


function add(x, y) {
    return x + y
}


function subtract(x, y) {
    return x - y
}


function multiply(x, y) {
    return x * y
}


function divide(x, y) {
   if(y !== 0){
    return x / y
   }
   else{
    operation = [];
    return "Div0";
   }
}


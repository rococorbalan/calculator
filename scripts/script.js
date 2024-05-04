
let operation = [];

const signs = ["+", "*", "/", "-"]

let currentValue = "";
let nextValue = "";

let decimalOn = false;

const decimal = document.querySelector(".decimal")
const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")
const display = document.querySelector(".display");

const operators = document.querySelectorAll(".operator");
const buttons = document.querySelectorAll(".number");


deactivateOperators(operators);


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        
        display.textContent = button.textContent;

        let item = display.textContent;
        console.log(`${item}, ${operation}`)
        


        if(typeof(checkIfOperator(item)) === "number"){

            activateOperators(operators);
            currentValue += item; 

            // console.log(currentValue)
            display.textContent = currentValue;
        }

        if(checkIfOperator(item) === true){
            decimalOn = false;
            // console.log(operation)
            if(operation.length !== 1){
                operation.push(parseFloat(currentValue));
                nextValue = currentValue;
                currentValue = "";
            }
            
            operation.push(item);
            // console.log(operation)
            deactivateOperators(operators);
        }

        if(operation.length >= 3){
            // console.log(operation)
            if (operate(...operation) === "Div0"){
                display.textContent = "Division by 0"
                operation = []
                return;
            }
            result = operate(...operation);
            display.textContent = result
            operation = [result, item];
            decimalOn = false;
        }
        
    })
})

clear.addEventListener("click", () => {
    display.textContent = "0"
    deactivateOperators(operators);
    decimalOn = false;
    currentValue = ""
    nextValue = ""
    operation = []
})


equal.addEventListener("click", () => {
    if(nextValue != ""){
        operation.push(parseFloat(currentValue));
        nextValue = currentValue;
        currentValue = "";

        if (operate(...operation) === "Div0"){
            display.textContent = "Division by 0"
            operation = []
            return;
        }
        result = operate(...operation);
        display.textContent = result
        operation = [result];
        decimalOn = false;
    }
})


decimal.addEventListener("click", () => {
    if(decimalOn === false) {
        currentValue += "."
        display.textContent = currentValue;
        decimalOn = true;
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


function deactivateOperators(nodeList){
    nodeList.forEach((button) => {
        if(button.disabled === false){
            button.disabled = true;
        }
    })
}

function activateOperators(nodeList){
    nodeList.forEach((button) => {
        if(button.disabled === true){
            button.disabled = false;
        }
    })
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



let operation = [];

const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")
const display = document.querySelector(".display");

const buttons = document.querySelectorAll(".number");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        display.textContent = button.textContent;
        let item = display.textContent;

        if(operation.length !== 1 && typeof(checkIfOperator(item)) === "number"){
            console.log(operation)
            operation.push(checkIfOperator(item))
        }
        if(operation.length === 1 && checkIfOperator(item) === true){
            console.log(operation)
            operation.push(item)
        }
        if(operation.length === 3){
            console.log(operation)
            result = operate(...operation);
            display.textContent = result
            operation = [result];
        }
        
    })
})

// equal.addEventListener("click", () => {
//     if(operation.length === 3){
//         console
//     }
// })

clear.addEventListener("click", () => {
    operation = []
    display.textContent =""
})


function checkIfOperator(string) {
    if(string === "+" ||string === "-" || string === "*" || string === "/" ){
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
    return "Divison By 0"
   }
}


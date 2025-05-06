function plus(num1, num2){
    console.log(num1 + num2)
}

function minus(num1, num2) {
    console.log(num1 - num2)
}

function div(num1, num2) {
    console.log(num1 / num2)
}
function mul(num1, num2) {
    console.log(num1 * num2)
}

let num1 = parseInt(prompt("Enter Number 1: "))
let operator = parseInt(prompt("Enter operator: "))
let num2 = parseInt(prompt("Enter Number 2: "))


if (operator == "+") {
    plus(num1, num2)
}
if (operator == "-") {
    minus(num1, num2)
}
if (operator == "*") {
    mul(num1, num2)
}
else{
    div(num1, num2)
}
//Begin script.
const add = document.getElementById("#add")
add.addEventListener('click', addition());


function addition(a, b) {        //sign functions to be called by an operate func.
    let plus = (a + b);
    return plus;
}

function subtraction(a, b) {
    let subtract = (a - b);
    return subtract;
}                         

function division(a, b) {
    let divide = (a / b);
    return divide;
}

function multiply(a, b) {
    let multi = (a * b);
    return multi;
}

function operate {               //A function which takes an operator and calls a function
}
const numberBtns = document.querySelectorAll('[data-number]');
const opBtns = document.querySelectorAll('[data-operation]');
const delBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');
const clearBtn = document.querySelector('[data-all-clear]');
const prevOpTxt = document.querySelector('[data-previous-op]');
const currOpTxt = document.querySelector('[data-current-op]');

class calc {
    constructor(prevOpTxt, currOpTxt) {
        this.prevOpTxt = prevOpTxt;
        this.currOpTxt = currOpTxt;
        this.clear();
    }
}

function delete() {

}

function clear() {
    this.currentOp = '';
    this.prevOp = '';
    this.operation = undefined;
}
const calculator = new calc(prevOpTxt, currOpTxt)

function operate() {

}

function appendNum(number) {

}

function chooseOp(operation) {

}

function updateDisp() {

}
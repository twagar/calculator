const numberBtns = document.querySelectorAll('[data-number]');
const opBtns = document.querySelectorAll('[data-operation]');
const delBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');
const clearBtn = document.querySelector('[data-all-clear]');
const prevOpTxt = document.querySelector('[data-previous-op]');
const currOpTxt = document.querySelector('[data-current-op]');

class Calc {
    constructor(prevOpTxt, currOpTxt) {
        this.prevOpTxt = prevOpTxt;
        this.currOpTxt = currOpTxt;
        this.clear();
    }


clear() {
    this.currentOp = '';
    this.prevOp = '';
    this.operation = undefined;
}

delete() {
    this.currentOp = this.currentOp.toString().slice(0, -1);
}

operate() {
    let oper;
    const prev = parseFloat(this.prevOp);
    const curr = parseFloat(this.currentOp);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (this.operation) {
        case '+':
            oper = prev + curr;
            break
        case '-':
            oper = prev - curr;
            break
        case '÷':
            oper = prev / curr;
            break
        case '*':
            oper = prev * curr;
            break
        default:
            return
    }
    this.currentOp = oper;
    this.operation = undefined;
    this.prevOp = '';
}

appendNum(number) {
    if (number === '.' && this.currentOp.includes('.')) return;
    this.currentOp = this.currentOp.toString() + number.toString();
}

chooseOp(operation) {
    if (this.currentOp === '') return
    if (this.prevOp !== '') {
        this.operate();
    }
    this.operation = operation;
    this.prevOp = this.currentOp;
    this.currentOp = '';
};

updateDisp() {
    this.currOpTxt.innerText = this.getDispNum(this.currentOp);
    if (this.operation != null) {
        this.prevOpTxt.innerText = `${this.getDispNum(this.prevOp)} ${this.operation}`;
    this.currOpTxt.innerText = this.currentOp;
} else {
    this.prevOpTxt.innerText = '';
}
}

getDispNum(number) {
    const stringNum = number.toString();
    const intDigits = parseFloat(stringNum.split('.')[0]);
    const deciDigits = stringNum.split('.')[1];
    let intDisp;
    if (isNaN(intDigits)) {
        intDisp = '';
    } else {
    intDisp = intDigits.toLocaleString('en', {maximumFractionDigits: 0})
    }
    if (deciDigits != null) {
        return `${intDisp}.${deciDigits}`;
    } else {
        return intDisp;
    }
}
}
clearBtn.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisp();
});

opBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOp(button.innerText);
        calculator.updateDisp();
    })
});

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText);
        calculator.updateDisp();
    });
});

equalsBtn.addEventListener('click', button => {
    calculator.operate()
    calculator.updateDisp();
});

delBtn.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisp();
});


const calculator = new Calc(prevOpTxt, currOpTxt)

const res = document.getElementById('res');

const calculator = {
    operand1: '',
    operand2: '',
    operator: false,
    curOp: 'operand1',
    displayText: '',
};

function render(e = '') {
    calculator.displayText += e;
    res.innerHTML = calculator.displayText;
}

function sum() {
    return parseInt(parseInt(this.operand1, 2) + parseInt(this.operand2, 2));
}

function sub() {
    return parseInt(parseInt(this.operand1, 2) - parseInt(this.operand2, 2));
}

function mul() {
    return parseInt(parseInt(this.operand1, 2) * parseInt(this.operand2, 2));
}

function div() {
    return parseInt(parseInt(this.operand1, 2) / parseInt(this.operand2, 2));
}

function calc(id) {
    if (id == 'btn0') {
        calculator[calculator.curOp] += '0';
        render(0);
    } else if (id == 'btn1') {
        calculator[calculator.curOp] += '1';
        render(1);
    } else if (id == 'btnSum') {
        calculator.operator = sum;
        calculator.curOp = 'operand2';
        render('+');
    } else if (id == 'btnSub') {
        calculator.operator = sub;
        calculator.curOp = 'operand2';
        render('-');
    } else if (id == 'btnMul') {
        calculator.operator = mul;
        calculator.curOp = 'operand2';
        render('*');
    } else if (id == 'btnDiv') {
        calculator.operator = div;
        calculator.curOp = 'operand2';
        render('/');
    } else if (id == 'btnClr') {
        calculator.displayText = '';
        calculator.operand1 = '';
        calculator.operand2 = '';
        calculator.curOp = 'operand1';
        render();
    } else if (id == 'btnEql') {
        console.log(calculator.operand1);
        console.log(calculator.operand2);
        const result = parseInt(calculator.operator()).toString(2);
        calculator.displayText = result;

        render();
        calculator.operand1 = calculator.displayText;
        calculator.operand2 = '';
        calculator.curOp = 'operand1';
        calculator.operator = false;
    }

    res.innerHTML;
}

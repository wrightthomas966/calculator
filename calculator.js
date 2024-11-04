function handleNumClick(event) {
    if(!typing) {
        input.textContent = event.target.textContent;
        typing = true;
        return;
    }
    input.textContent += event.target.textContent;
}

function handleOperatorClick(event) {
    event.target.backgroundColor = '#a2dfa4'
    if(!typing) {
        sum.operator = event.target.textContent;
        return;
    } else if(!sum.left) {
        sum.left = parseFloat(input.textContent);
    } else {
        sum.right = parseFloat(input.textContent);
        sum.left = sum.calc();
        input.textContent = sum.left;
    }
    sum.operator = event.target.textContent;

    typing = false;
}

function clearInput() {
    sum.clear();
    input.textContent = '0'
    typing = false;
}

function signInput() {
    if(!typing) {
        return;
    }
    if(input.textContent[0] === '-' ) {
        input.textContent = input.textContent.slice(1);
    } else {
        input.textContent = '-' + input.textContent;
    }
}

function percent() {
    input.textContent = input.textContent / 100;
}

function decimalClick() {
    if(input.textContent.includes('.')) return;
    input.textContent = input.textContent + '.';
    typing = true;
}


let typing = false;

const sum = {
    left: 0,
    operator: '',
    right: 0,
    typing: false,
    calc() {
        const a = this.left;
        const b = this.right;
        switch(this.operator) {
            case '/':
                return a / b;
            case '*':
                return a * b;
            case '-':
                return a - b;
            case '+':
                return a + b;
        }
    },
    clear() {
        this.left = 0;
        this.right = 0;
        this.operator = '';
    }
}

const operators = document.querySelectorAll('.operator').forEach(
    operator => operator.addEventListener('click', handleOperatorClick)
);

const numbers = document.querySelectorAll('.operand').forEach(
    operand => operand.addEventListener('click', handleNumClick)
);


const clear = document.querySelector('.clear').addEventListener('click', clearInput);

const sign = document.querySelector('.sign').addEventListener('click', signInput);
const decimal = document.querySelector('.decimal').addEventListener('click', decimalClick);


const percentBtn = document.querySelector('.percent').addEventListener('click', percent);


const input = document.querySelector('.current');


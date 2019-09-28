// active number and number to operate with
let activeNum = 0;
let savedNum = 0;

let decimalMode = false;

// current active operation
let activeOp = null;

// possible operations
const ADD = 'ADD';
const SUBTRACT = 'SUB';
const MULTIPLY = 'MULT';
const DIVIDE = 'DIV';

let displayNum = document.getElementById('displayText');

// get number buttons
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let num5 = document.getElementById('num5');
let num6 = document.getElementById('num6');
let num7 = document.getElementById('num7');
let num8 = document.getElementById('num8');
let num9 = document.getElementById('num9');
let num0 = document.getElementById('num0');

// get function buttons
let btnSubtract = document.getElementById('subtract');
let btnMultiply = document.getElementById('multiply');
let btnDecimal = document.getElementById('decimal');
let btnEquals = document.getElementById('equals');
let btnCancel = document.getElementById('cancel');
let btnDivide = document.getElementById('divide');
let btnSign = document.getElementById('sign');
let btnAdd = document.getElementById('add');


// add number button events
num0.addEventListener('click', function() {
  numPress(0);
});

num1.addEventListener('click', function() {
  numPress(1);
});

num2.addEventListener('click', function() {
  numPress(2);
});

num3.addEventListener('click', function() {
  numPress(3);
});

num4.addEventListener('click', function() {
  numPress(4);
});

num5.addEventListener('click', function() {
  numPress(5);
});

num6.addEventListener('click', function() {
  numPress(6);
});

num7.addEventListener('click', function() {
  numPress(7);
});

num8.addEventListener('click', function() {
  numPress(8);
});

num9.addEventListener('click', function() {
  numPress(9);
});

// add number key events
document.addEventListener('keypress', function(e) {
  let code = e.charCode
  console.log(code);
  if (code >= 48 && code <= 57) {
    numPress(Number(String.fromCharCode(code)));
  } 

  switch(code) {
    case 43:
      opPress(ADD);
      break;
    case 47:
      opPress(DIVIDE);
      break;
    case 42:
      opPress(MULTIPLY);
      break;
    case 45:
      opPress(SUBTRACT);
      break;
    case 61:
      equals();
      break;
    case 13:
      equals();
      break
    default:
      break;
  }
  if (code == 43) {
    opPress(ADD);
  }
});

// add function button events
btnAdd.addEventListener('click', function() {
  opPress(ADD);
});

btnSubtract.addEventListener('click', function() {
  opPress(SUBTRACT);
});

btnMultiply.addEventListener('click', function() {
  opPress(MULTIPLY);
});

btnDivide.addEventListener('click', function() {
  opPress(DIVIDE);
});

btnSign.addEventListener('click', function() {
  activeNum *= -1;
  updateDisplay();
});

btnCancel.addEventListener('click', function() {
  activeNum = 0;
  savedNum = 0;
  updateDisplay();
});

btnEquals.addEventListener('click', function() {
  equals();
});

btnDecimal.addEventListener('click', function() {
  setDecimalMode(true);
});

function numPress(num) {
  if (decimalMode) {
    let strNum = activeNum.toString();
    if (strNum.includes('.')) {
      strNum = strNum + `${num}`;
    } else {
      strNum = strNum + `.${num}`;
    }
    activeNum = parseFloat(strNum);
    console.log(strNum);
  } else {
    activeNum = activeNum * 10 + num;
  }

  updateDisplay();
}

function opPress(op) {
  if (activeOp != null) {
    activeNum = operate(activeOp, activeNum, savedNum);
    updateDisplay();
  }
  activeOp = op;
  savedNum = activeNum;
  activeNum = 0;
  setDecimalMode(false);
}

function equals() {
  activeNum = operate(activeOp, activeNum, savedNum);
  activeOp = null;
  setDecimalMode(false);
  updateDisplay();
}

function setDecimalMode(mode) {
  decimalMode = mode;
}

// Miscellanious functions
function updateDisplay() {
  displayNum.innerText = activeNum;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    switch(op) {
        case 'ADD':
            return add(a, b);
            break;
        case 'SUB':
            return subtract(b, a);
            break;
        case 'MULT':
            return multiply(a, b);
            break;
        case 'DIV':
            return divide(b, a);
            break;
        default:
            return 0;
    }
}
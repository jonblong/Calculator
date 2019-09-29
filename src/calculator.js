const Calculator = (function() {
  // active number and number to operate with
  let activeNum = 0;
  let storedNum = 0;

  // flag for decimal vs. normal
  let decimalMode = false;

  // flag to allow chaining with equal button
  let equalMode = false;

  // active operation and all possible operations
  let activeOp = null;
  const ADD = 'a';
  const SUBTRACT = 's';
  const MULTIPLY = 'm';
  const DIVIDE = 'd';

  // reference to node that displays active number
  let displayNum = document.getElementById('displayText');

  // assigns button nodes and adds listeners
  let SetupButtons = function() {
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

    // get function buttons
    let btnSubtract = document.getElementById('subtract');
    let btnMultiply = document.getElementById('multiply');
    let btnDecimal = document.getElementById('decimal');
    let btnEquals = document.getElementById('equals');
    let btnCancel = document.getElementById('cancel');
    let btnDivide = document.getElementById('divide');
    let btnSign = document.getElementById('sign');
    let btnAdd = document.getElementById('add');

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
      storedNum = 0;
      setDecimalMode(false);
      equalMode = false;
      updateDisplay();
    });

    btnEquals.addEventListener('click', function() {
      equals();
      equalMode = true;
    });

    btnDecimal.addEventListener('click', function() {
      setDecimalMode(true);
    });
  }

  // assigns keypresses to different numbers/functions
  let SetupKeyListener = function() {
    document.addEventListener('keypress', function(e) {
      let code = e.charCode

      // check if key was a number
      if (code >= 48 && code <= 57) {
        numPress(Number(String.fromCharCode(code)));
      }

      // check if key was an operator
      switch(code) {
        // *
        case 42:
          opPress(MULTIPLY);
          break;

        // +
        case 43:
          opPress(ADD);
          break;

        // -
        case 45:
          opPress(SUBTRACT);
          break;

        // / BUGGED!!! -jon
        case 47:
          opPress(DIVIDE);
          break;

        // Enter or =
        case 61:
        case 13:
          equals();
          break;
        default:
      }
    });
  }

  // handles logic for number input
  function numPress(num) {
    // check to see if equal flag is true
    if (equalMode) {
      activeNum = 0;
      storedNum = 0;
      equalMode = false;
    }

    // checks if there is already a decimal digit
    if (decimalMode) {
      let strNum = activeNum.toString();
      if (strNum.includes('.')) {
        strNum += `${num}`;
      } else {
        strNum += `.${num}`;
      }
      // convert string back to float
      activeNum = parseFloat(strNum);
    } else {
      activeNum = activeNum * 10 + num;
    }

    updateDisplay();
  }

  // handles logic for operator input
  function opPress(op) {
    // if this isn't the first operation, carry out the first
    if (activeOp != null) {
      activeNum = operate(activeOp, activeNum, storedNum);
      updateDisplay();
    }

    equalMode = false;

    activeOp = op;
    storedNum = activeNum;
    activeNum = 0;
    console.log(`Active: ${activeNum}`);
    console.log(`Stored: ${storedNum}`);
    setDecimalMode(false);
  }

  // carry out all pending operations
  function equals() {
    activeNum = operate(activeOp, activeNum, storedNum);
    updateDisplay();
    activeOp = null;
    setDecimalMode(false);

    console.log(`Active: ${activeNum}`);
    console.log(`Stored: ${storedNum}`);

    equalMode = true;
  }

  // set decimal mode to true or false
  function setDecimalMode(mode) {
    decimalMode = mode;
  }

  // updates the number displayed on the screen
  function updateDisplay() {
    displayNum.innerText = activeNum;
  }

  // carries out the current operation on two numbers
  function operate(op, a, b) {
    switch(op) {
      case 'a':
          return add(a, b);
      case 's':
          return subtract(b, a);
      case 'm':
          return multiply(a, b);
      case 'd':
          return divide(b, a);
      default:
          return 0;
    }
  }

  // math operations
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

  return { SetupButtons, SetupKeyListener };
}());

export default Calculator;
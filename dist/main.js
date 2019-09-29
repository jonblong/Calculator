/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Calculator = (function() {\n  // active number and number to operate with\n  let activeNum = 0;\n  let storedNum = 0;\n\n  // flag for decimal vs. normal\n  let decimalMode = false;\n\n  // flag to allow chaining with equal button\n  let equalMode = false;\n\n  // active operation and all possible operations\n  let activeOp = null;\n  const ADD = 'a';\n  const SUBTRACT = 's';\n  const MULTIPLY = 'm';\n  const DIVIDE = 'd';\n\n  // reference to node that displays active number\n  let displayNum = document.getElementById('displayText');\n\n  // assigns button nodes and adds listeners\n  let SetupButtons = function() {\n    // get number buttons\n    let num1 = document.getElementById('num1');\n    let num2 = document.getElementById('num2');\n    let num3 = document.getElementById('num3');\n    let num4 = document.getElementById('num4');\n    let num5 = document.getElementById('num5');\n    let num6 = document.getElementById('num6');\n    let num7 = document.getElementById('num7');\n    let num8 = document.getElementById('num8');\n    let num9 = document.getElementById('num9');\n    let num0 = document.getElementById('num0');\n\n    // add number button events\n    num0.addEventListener('click', function() {\n      numPress(0);\n    });\n\n    num1.addEventListener('click', function() {\n      numPress(1);\n    });\n\n    num2.addEventListener('click', function() {\n      numPress(2);\n    });\n\n    num3.addEventListener('click', function() {\n      numPress(3);\n    });\n\n    num4.addEventListener('click', function() {\n      numPress(4);\n    });\n\n    num5.addEventListener('click', function() {\n      numPress(5);\n    });\n\n    num6.addEventListener('click', function() {\n      numPress(6);\n    });\n\n    num7.addEventListener('click', function() {\n      numPress(7);\n    });\n\n    num8.addEventListener('click', function() {\n      numPress(8);\n    });\n\n    num9.addEventListener('click', function() {\n      numPress(9);\n    });\n\n    // get function buttons\n    let btnSubtract = document.getElementById('subtract');\n    let btnMultiply = document.getElementById('multiply');\n    let btnDecimal = document.getElementById('decimal');\n    let btnEquals = document.getElementById('equals');\n    let btnCancel = document.getElementById('cancel');\n    let btnDivide = document.getElementById('divide');\n    let btnSign = document.getElementById('sign');\n    let btnAdd = document.getElementById('add');\n\n    // add function button events\n    btnAdd.addEventListener('click', function() {\n      opPress(ADD);\n    });\n\n    btnSubtract.addEventListener('click', function() {\n      opPress(SUBTRACT);\n    });\n\n    btnMultiply.addEventListener('click', function() {\n      opPress(MULTIPLY);\n    });\n\n    btnDivide.addEventListener('click', function() {\n      opPress(DIVIDE);\n    });\n\n    btnSign.addEventListener('click', function() {\n      activeNum *= -1;\n      updateDisplay();\n    });\n\n    btnCancel.addEventListener('click', function() {\n      activeNum = 0;\n      storedNum = 0;\n      setDecimalMode(false);\n      equalMode = false;\n      updateDisplay();\n    });\n\n    btnEquals.addEventListener('click', function() {\n      equals();\n      equalMode = true;\n    });\n\n    btnDecimal.addEventListener('click', function() {\n      setDecimalMode(true);\n    });\n  }\n\n  // assigns keypresses to different numbers/functions\n  let SetupKeyListener = function() {\n    document.addEventListener('keypress', function(e) {\n      let code = e.charCode\n\n      // check if key was a number\n      if (code >= 48 && code <= 57) {\n        numPress(Number(String.fromCharCode(code)));\n      }\n\n      // check if key was an operator\n      switch(code) {\n        // *\n        case 42:\n          opPress(MULTIPLY);\n          break;\n\n        // +\n        case 43:\n          opPress(ADD);\n          break;\n\n        // -\n        case 45:\n          opPress(SUBTRACT);\n          break;\n\n        // / BUGGED!!! -jon\n        case 47:\n          opPress(DIVIDE);\n          break;\n\n        // Enter or =\n        case 61:\n        case 13:\n          equals();\n          break;\n        default:\n      }\n    });\n  }\n\n  // handles logic for number input\n  function numPress(num) {\n    // check to see if equal flag is true\n    if (equalMode) {\n      activeNum = 0;\n      storedNum = 0;\n      equalMode = false;\n    }\n\n    // checks if there is already a decimal digit\n    if (decimalMode) {\n      let strNum = activeNum.toString();\n      if (strNum.includes('.')) {\n        strNum += `${num}`;\n      } else {\n        strNum += `.${num}`;\n      }\n      // convert string back to float\n      activeNum = parseFloat(strNum);\n    } else {\n      activeNum = activeNum * 10 + num;\n    }\n\n    updateDisplay();\n  }\n\n  // handles logic for operator input\n  function opPress(op) {\n    // if this isn't the first operation, carry out the first\n    if (activeOp != null) {\n      activeNum = operate(activeOp, activeNum, storedNum);\n      updateDisplay();\n    }\n\n    equalMode = false;\n\n    activeOp = op;\n    storedNum = activeNum;\n    activeNum = 0;\n    console.log(`Active: ${activeNum}`);\n    console.log(`Stored: ${storedNum}`);\n    setDecimalMode(false);\n  }\n\n  // carry out all pending operations\n  function equals() {\n    activeNum = operate(activeOp, activeNum, storedNum);\n    updateDisplay();\n    activeOp = null;\n    setDecimalMode(false);\n\n    console.log(`Active: ${activeNum}`);\n    console.log(`Stored: ${storedNum}`);\n\n    equalMode = true;\n  }\n\n  // set decimal mode to true or false\n  function setDecimalMode(mode) {\n    decimalMode = mode;\n  }\n\n  // updates the number displayed on the screen\n  function updateDisplay() {\n    displayNum.innerText = activeNum;\n  }\n\n  // carries out the current operation on two numbers\n  function operate(op, a, b) {\n    switch(op) {\n      case 'a':\n          return add(a, b);\n      case 's':\n          return subtract(b, a);\n      case 'm':\n          return multiply(a, b);\n      case 'd':\n          return divide(b, a);\n      default:\n          return 0;\n    }\n  }\n\n  // math operations\n  function add(a, b) {\n    return a + b;\n  }\n\n  function subtract(a, b) {\n      return a - b;\n  }\n\n  function multiply(a, b) {\n      return a * b;\n  }\n\n  function divide(a, b) {\n      return a / b;\n  }\n\n  return { SetupButtons, SetupKeyListener };\n}());\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\n\n//# sourceURL=webpack:///./src/calculator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator */ \"./src/calculator.js\");\n\n\n_calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SetupButtons();\n_calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SetupKeyListener();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
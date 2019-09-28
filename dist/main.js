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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// active number and number to operate with\nlet activeNum = 0;\nlet savedNum = 0;\n\nlet decimalMode = false;\n\n// current active operation\nlet activeOp = null;\n\n// possible operations\nconst ADD = 'ADD';\nconst SUBTRACT = 'SUB';\nconst MULTIPLY = 'MULT';\nconst DIVIDE = 'DIV';\n\nlet displayNum = document.getElementById('displayText');\n\n// get number buttons\nlet num1 = document.getElementById('num1');\nlet num2 = document.getElementById('num2');\nlet num3 = document.getElementById('num3');\nlet num4 = document.getElementById('num4');\nlet num5 = document.getElementById('num5');\nlet num6 = document.getElementById('num6');\nlet num7 = document.getElementById('num7');\nlet num8 = document.getElementById('num8');\nlet num9 = document.getElementById('num9');\nlet num0 = document.getElementById('num0');\n\n// get function buttons\nlet btnSubtract = document.getElementById('subtract');\nlet btnMultiply = document.getElementById('multiply');\nlet btnDecimal = document.getElementById('decimal');\nlet btnEquals = document.getElementById('equals');\nlet btnCancel = document.getElementById('cancel');\nlet btnDivide = document.getElementById('divide');\nlet btnSign = document.getElementById('sign');\nlet btnAdd = document.getElementById('add');\n\n\n// add number button events\nnum0.addEventListener('click', function() {\n  numPress(0);\n});\n\nnum1.addEventListener('click', function() {\n  numPress(1);\n});\n\nnum2.addEventListener('click', function() {\n  numPress(2);\n});\n\nnum3.addEventListener('click', function() {\n  numPress(3);\n});\n\nnum4.addEventListener('click', function() {\n  numPress(4);\n});\n\nnum5.addEventListener('click', function() {\n  numPress(5);\n});\n\nnum6.addEventListener('click', function() {\n  numPress(6);\n});\n\nnum7.addEventListener('click', function() {\n  numPress(7);\n});\n\nnum8.addEventListener('click', function() {\n  numPress(8);\n});\n\nnum9.addEventListener('click', function() {\n  numPress(9);\n});\n\n// add number key events\ndocument.addEventListener('keypress', function(e) {\n  let code = e.charCode\n  console.log(code);\n  if (code >= 48 && code <= 57) {\n    numPress(Number(String.fromCharCode(code)));\n  } \n\n  switch(code) {\n    case 43:\n      opPress(ADD);\n      break;\n    case 47:\n      opPress(DIVIDE);\n      break;\n    case 42:\n      opPress(MULTIPLY);\n      break;\n    case 45:\n      opPress(SUBTRACT);\n      break;\n    case 61:\n      equals();\n      break;\n    case 13:\n      equals();\n      break\n    default:\n      break;\n  }\n  if (code == 43) {\n    opPress(ADD);\n  }\n});\n\n// add function button events\nbtnAdd.addEventListener('click', function() {\n  opPress(ADD);\n});\n\nbtnSubtract.addEventListener('click', function() {\n  opPress(SUBTRACT);\n});\n\nbtnMultiply.addEventListener('click', function() {\n  opPress(MULTIPLY);\n});\n\nbtnDivide.addEventListener('click', function() {\n  opPress(DIVIDE);\n});\n\nbtnSign.addEventListener('click', function() {\n  activeNum *= -1;\n  updateDisplay();\n});\n\nbtnCancel.addEventListener('click', function() {\n  activeNum = 0;\n  savedNum = 0;\n  updateDisplay();\n});\n\nbtnEquals.addEventListener('click', function() {\n  equals();\n});\n\nbtnDecimal.addEventListener('click', function() {\n  setDecimalMode(true);\n});\n\nfunction numPress(num) {\n  if (decimalMode) {\n    let strNum = activeNum.toString();\n    if (strNum.includes('.')) {\n      strNum = strNum + `${num}`;\n    } else {\n      strNum = strNum + `.${num}`;\n    }\n    activeNum = parseFloat(strNum);\n    console.log(strNum);\n  } else {\n    activeNum = activeNum * 10 + num;\n  }\n\n  updateDisplay();\n}\n\nfunction opPress(op) {\n  if (activeOp != null) {\n    activeNum = operate(activeOp, activeNum, savedNum);\n    updateDisplay();\n  }\n  activeOp = op;\n  savedNum = activeNum;\n  activeNum = 0;\n  setDecimalMode(false);\n}\n\nfunction equals() {\n  activeNum = operate(activeOp, activeNum, savedNum);\n  activeOp = null;\n  setDecimalMode(false);\n  updateDisplay();\n}\n\nfunction setDecimalMode(mode) {\n  decimalMode = mode;\n}\n\n// Miscellanious functions\nfunction updateDisplay() {\n  displayNum.innerText = activeNum;\n}\n\nfunction add(a, b) {\n    return a + b;\n}\n\nfunction subtract(a, b) {\n    return a - b;\n}\n\nfunction multiply(a, b) {\n    return a * b;\n}\n\nfunction divide(a, b) {\n    return a / b;\n}\n\nfunction operate(op, a, b) {\n    switch(op) {\n        case 'ADD':\n            return add(a, b);\n            break;\n        case 'SUB':\n            return subtract(b, a);\n            break;\n        case 'MULT':\n            return multiply(a, b);\n            break;\n        case 'DIV':\n            return divide(b, a);\n            break;\n        default:\n            return 0;\n    }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
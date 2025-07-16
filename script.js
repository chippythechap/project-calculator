let a;
let b;
let operator = "+";

const display = document.querySelector("#display>p");

const keys = document.querySelector("#keys");

keys.addEventListener("click", (e) => {
  let key = e.target.textContent;
  switch (key) {
    case "=":
      display.textContent = getParts(display.textContent);
      break;
    default:
      display.textContent += key;
      break;
  }
});

//functions

function getParts(str) {
  let a = 0;
  let b = "";
  let operator;
  for (let i = 0; i <= str.length; i++) {
    switch (str[i]) {
      case "+":
      case "-":
      case "*":
      case "/":
      case undefined:
        switch (operator) {
          case "-":
            a -= parseFloat(b);
            break;
          case "*":
            a *= parseFloat(b);
            break;
          case "/":
            a /= parseFloat(b);
            break;
          default:
            if (b !== "") {
              a += parseFloat(b);
            }
            break;
        }
        operator = str[i];
        b = "";
        break;
      default:
        b += str[i];
        break;
    }
  }
  return a;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      add(a, b);
      break;
    case "-":
      subtract(a, b);
      break;
    case "*":
      multiply(a, b);
      break;
    case "/":
      divide(a, b);
      break;
  }
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

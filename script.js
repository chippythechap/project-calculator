let a;
let b;
let operator = "+";

const display = document.querySelector("#display>p");

const keys = document.querySelector("#keys");

document.addEventListener("keydown", (e) => {
  let key = e.key;

  switch (key) {
    case "Backspace":
      display.textContent = display.textContent.slice(
        0,
        display.textContent.length - 1
      );
      break;
    case " ":
      display.textContent = "";
      break;
    case "=":
      display.textContent = getParts(display.textContent);
      break;
    case "0":
      display.textContent += key;
      break;
      case "1":
      display.textContent += key;
      break;
      case "2":
      display.textContent += key;
      break;
      case "3":
      display.textContent += key;
      break;
      case "4":
      display.textContent += key;
      break;
      case "5":
      display.textContent += key;
      break;
      case "6":
      display.textContent += key;
      break;
      case "7":
      display.textContent += key;
      break;
      case "8":
      display.textContent += key;
      break;
      case "9":
      display.textContent += key;
      break;
      case ".":
      display.textContent += key;
      break;
      case "+":
      display.textContent += key;
      break;
      case "-":
      display.textContent += key;
      break;
      case "*":
      display.textContent += key;
      break;
      case "/":
      display.textContent += key;
      break;
    default:
      break;
  }

  display.scrollLeft = display.scrollWidth;
});

keys.addEventListener("click", (e) => {
  const key = e.target.textContent;

  if (key.tagName !== "BUTTON") return;

  switch (key) {
    case "del":
      display.textContent = display.textContent.slice(
        0,
        display.textContent.length - 1
      );
      break;
    case "clr":
      display.textContent = "";
      break;
    case "=":
      display.textContent = getParts(display.textContent);
      break;
    default:
      display.textContent += value;
      break;
  }

  display.scrollLeft = display.scrollWidth;
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
        a = operate(a, b, operator);
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
  if (b === "") {
    b = 0;
  }
  b = parseFloat(b);
  switch (operator) {
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return add(a, b);
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

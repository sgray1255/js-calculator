const displayOne = document.querySelector("#first-operand");
const displayTwo = document.querySelector("#second-operand");
const numberButtons = document.querySelectorAll(".button-number");
const operationButtons = document.querySelectorAll(".button-operator");
const equal = document.querySelector("#equal");
const clear = document.querySelector(".clear");
const allClear = document.querySelector(".all-clear");


let previousOperand = '';
let currentOperand = '';
let result = '';
let operation = '';
let decimal = false;


for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", (event) => {
      if (event.target.value === '.' && !decimal) {
        decimal = true;
      } else if (event.target.value === '.' && decimal && !operation) {
        return;
      }
      currentOperand += event.target.value;
      displayTwo.value = currentOperand;
      return currentOperand;
    }

  )
};

for (let i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener("click", (event) => {
    const operationName = operationButtons[i].value;
    if (!currentOperand) {
      return;
    }
    if (previousOperand && currentOperand && operation) {
      calculate();
      previousOperand = parseFloat(result);
      currentOperand = '';

    } else if (previousOperand && currentOperand && operation && result) {
      displayOne.value = parseFloat(result);
      previousOperand = parseFloat(result);
      calculate();
    } else {
      result = parseFloat(currentOperand);
    }
    updateDisplay(operationName);
    operation = operationName;
  });

  const updateDisplay = (operationName) => {
    previousOperand = parseFloat(result);
    displayOne.value = previousOperand + operationName;
    displayTwo.value = currentOperand;
    currentOperand = '';
  }
};

const calculate = () => {
  if (operation === 'x') {
    return result = (parseFloat(previousOperand) * parseFloat(currentOperand)).toFixed(6);
  } else if (operation === '/') {
    return result = (parseFloat(previousOperand) / parseFloat(currentOperand)).toFixed(6);
  } else if (operation === '+') {
    return result = (parseFloat(previousOperand) + parseFloat(currentOperand)).toFixed(6);
  } else if (operation === '-') {
    return result = (parseFloat(previousOperand) - parseFloat(currentOperand)).toFixed(6);
  }

};


equal.addEventListener("click", (event) => {
  calculate();
  displayOne.value = '';
  displayTwo.value = parseFloat(result);
});

allClear.addEventListener("click", (event) => {
  displayOne.value = '';
  displayTwo.value = '';
  previousOperand = '';
  currentOperand = '';
  result = '';
})

clear.addEventListener("click", (event) => {
  displayTwo.value = '';
  currentOperand = '';
})

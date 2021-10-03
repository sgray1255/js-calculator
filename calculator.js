const displayOne = document.querySelector("#first-operand");
const displayTwo = document.querySelector("#second-operand");
const numberButtons = document.querySelectorAll(".button-number");
const operationButtons = document.querySelectorAll(".button-operator");
const equal = document.querySelector("#equal");
const clear = document.querySelector(".clear");
const allClear = document.querySelector(".all-clear");


let displayOneNumber = '';
let displayTwoNumber = '';
let result = parseFloat(null);
let operation = '';
let decimal = false;


for (let i=0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", (event) => { 
    if (event.target.value === '.' && !decimal) {
      decimal = true;
    } else if(event.target.value === '.' && decimal) {
      return;
    }
    displayTwoNumber += event.target.value;
    displayTwo.value = displayTwoNumber;
    return displayTwoNumber;
  }
 )};

for (let i=0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener("click", (event) => {
    const operationName = operationButtons[i].value;
    if (!displayTwoNumber) {
      return;
    }
    if (displayOneNumber && displayTwoNumber && operation) {
      calculate();
    } else {
      result = displayTwoNumber;
    }
    clearDisplay(operationName);
    operation = operationName;
    console.log(result);
});

const clearDisplay = (operationName = ' ') => {
  displayOneNumber += displayTwoNumber + ' ' + operationName + ' ';
  displayOne.value = displayOneNumber;
  displayTwo.value = ' ';
  displayTwoNumber = ' ';
}};

const calculate = () => {
  if (operation === 'x') {
    result = parseFloat(result) * parseFloat(displayTwoNumber);
  } else if(operation === '/') {
    result = parseFloat(result) / parseFloat(displayTwoNumber);
  } else if(operation === '+') {
    result = parseFloat(result) + parseFloat(displayTwoNumber);
  } else if(operation === '-'){
    result = parseFloat(result) - parseFloat(displayTwoNumber);
  }
};

equal.addEventListener("click", (event)=>{
  calculate();
  displayOne.value = '';
  displayTwo.value = parseFloat(result);
  });

allClear.addEventListener("click", (event)=> {
  displayOne.value = '';
  displayTwo.value = '';
  displayOneNumber = '';
  displayTwoNumber = '';
  result = '';
})


const numberButtons = document.getElementsByClassName("button-number");
const operatorButtons = document.getElementsByClassName("button-operator");
const equalsButton = document.getElementById("equal");
const deleteButton = document.getElementById("delete");

const calculator = {
  displayValue: '',
  firstOperand: null,
  currentOperand: false,
  operator: null,
};

const updateDisplay = () => {
  const window = document.getElementById("window");
  window.value = calculator.displayValue;
}

updateDisplay();


for (let i=0; i < numberButtons.length; i++) { numberButtons[i].addEventListener("click", (event) => {
      const window = document.getElementById("window");
      window.value += event.target.value;
      const { displayValue } = calculator;
      calculator.displayValue = displayValue === '' ? window.value: displayValue + window.value;
    })
  };

console.log(calculator.displayValue)

for (let i=0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", (event) => {
    const window = document.getElementById("window");
    
    if (event.target.value === 'x'){
      window.value += event.target.value;
    }
    if (event.target.value === '/'){
      window.value += event.target.value;
    }
    if (event.target.value === '+'){
      window.value += event.target.value;
    }
    if (event.target.value === '-'){
      window.value += event.target.value;
    }
    if (event.target.value === 'A/C'){
      updateDisplay();
    }
    

  });
}



// loop through numberButtons and add event listener




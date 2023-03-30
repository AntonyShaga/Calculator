const numbersEls = document.querySelectorAll('.numbers');
const operatosEls = document.querySelectorAll('.operator');
const mainPanelEl = document.querySelector('.main-panel');
const calcResultEl = document.querySelector('.calcResult');
const cEL = document.getElementById('c');
const resultBtn = document.getElementById('result');
const decimalBtn = document.getElementById('decimal')
let isOperationClicked = false;
let memorySecondNumber = '0';
let operation = '';

console.log(calcResultEl);

console.log(mainPanelEl);

for (let i = 0; i < numbersEls.length; i++) {
  const number = numbersEls[i];
  number.addEventListener('click', numberPress);
}

for (let i = 0; i < operatosEls.length; i++) {
  const operatosEl = operatosEls[i];
  operatosEl.addEventListener('click', operationPress)
}

cEL.addEventListener('click', function (e) {
  mainPanelEl.value = '0';
});

resultBtn.addEventListener('click', onResultPress)


function numberPress () {
  resetDisplayIfNeed();
  appendNumberToDisplay(this.value);
};

function resetDisplayIfNeed() {
  if (isOperationClicked) {
    mainPanelEl.value = '';
    isOperationClicked = false;
  } 
};

function appendNumberToDisplay(numberValues) {
  if (mainPanelEl.value === '0') { 
    mainPanelEl.value = '';
  };

    mainPanelEl.value += numberValues;
};

function operationPress () {

  saveFirstNumber();
  setOperationClicedFlagToTrue();
  saveOperation(this.value);
};

function saveFirstNumber() {
  savedNum = mainPanelEl.value;
}
function setOperationClicedFlagToTrue() {
  isOperationClicked = true;
}
function saveOperation(operationValue) {
  operation = operationValue;
}

function onResultPress() {
  const value1 = getNumber1();
  const value2 = getNumber2();
  const operation = getOperation();

  const result = counterResult(value1, value2, operation);
  showResult(result)
}

function getNumber1() {
  return Number(savedNum);
}
function getNumber2() {
  return Number(mainPanelEl.value);
}
function getOperation() {
  return operation;
}
function counterResult(num1, num2, operation) {
  if (operation === '+') {
    return num1 + num2;
  } else if (operation === '-') {
    return num1 - num2;
  } else if (operation === '*') {
    return num1 * num2;
  } else if (operation === '/') {
    return num1 / num2;
  } else if (operation === '%') {
    return (num1 / 100) * num2;
  }
}

function showResult (result) {
  mainPanelEl.value = result;
}

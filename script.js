const clearEverythingButton = document.querySelector('#clearEverythingButton');
const calculateMortgageButton = document.querySelector('#calculateMortgageButton');

// INPUTS
const mortgageAmountInput = document.querySelector('#mortgageAmountInput');
const mortgageTermInput = document.querySelector('#mortgageTermInput');
const interestRateInput = document.querySelector('#interestRateInput');
const repaymentInput = document.querySelector('#repaymentInput');
const interestOnlyInput = document.querySelector('#interestOnlyInput');
const inputs = document.querySelectorAll('.mortgage-calculator-left-form-input-itself');
const inputContainers = document.querySelectorAll('.form-input-error');
/* const inputErrorMessages = document.querySelectorAll('.mortgage-calculator-left-form-input-error'); */
const radioInputs = document.querySelectorAll('.mortgage-calculator-left-form-input-radio-itself');
const radioInputErrorMessage = document.querySelector('.mortgage-calculator-left-form-input-radio-error');

// OUTPUT
const mortgageCalculatorRightEmpty = document.querySelector('.mortgage-calculator-right-empty');
const mortgageCalculatorRightItself = document.querySelector('.mortgage-calculator-right-itself');
const monthlyRepaymentText = document.querySelector('#monthlyRepaymentText');
const totalRepaymentText = document.querySelector('#totalRepaymentText');


// CALCULATING THE MORTGAGE

function calculatingTheMortgage(e) {
    e.preventDefault();

    const errorMessages = [];

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length === 0) {
            errorMessages.push(inputs[i]);
            inputContainers[i].classList.add('form-input-error-active');
        } else {
            inputContainers[i].classList.remove('form-input-error-active');
        };
        console.log(inputs[i]);
    };

    for (const radioInput of radioInputs) {
        if (radioInput.checked) {
            radioInputErrorMessage.classList.remove('mortgage-calculator-left-form-input-radio-error-active');
            break;
        } else {
            errorMessages.push(radioInputErrorMessage);
            radioInputErrorMessage.classList.add('mortgage-calculator-left-form-input-radio-error-active');
        };

        console.log(radioInput.value);
    };

    if (errorMessages.length === 0) {
        
    };
};

// INITIALIZE BUTTON
calculateMortgageButton.addEventListener('click', calculatingTheMortgage);
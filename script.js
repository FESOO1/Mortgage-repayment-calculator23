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
const radioInputs = document.querySelectorAll('.mortgage-calculator-left-form-input-radio-itself');
const radioInputErrorMessage = document.querySelector('.mortgage-calculator-left-form-input-radio-error');

// OUTPUT
const mortgageCalculatorRightEmpty = document.querySelector('.mortgage-calculator-right-empty');
const mortgageCalculatorRightItself = document.querySelector('.mortgage-calculator-right-itself');
const monthlyRepaymentText = document.querySelector('#monthlyRepaymentText');
const totalRepaymentText = document.querySelector('#totalRepaymentText');

// MORTGAGE CALCULATOR
const mortgageCalculator = {
    mortgageAmount: 0,
    mortgageTerm: 0,
    mortgageInterestRate: 0,
    mortgageType: '',
    mortgageMontlyRepayment: 0,
    mortgageTotalRepayment: 0,
};


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
    };

    for (const radioInput of radioInputs) {
        if (radioInput.checked) {
            radioInputErrorMessage.classList.remove('mortgage-calculator-left-form-input-radio-error-active');
            mortgageCalculator.mortgageType = radioInput.value;
            break;
        } else {
            errorMessages.push(radioInputErrorMessage);
            radioInputErrorMessage.classList.add('mortgage-calculator-left-form-input-radio-error-active');
        };
    };

    if (errorMessages.length === 0) {
        mortgageCalculator.mortgageAmount = Number(mortgageAmountInput.value);
        mortgageCalculator.mortgageTerm = Number(mortgageTermInput.value);
        mortgageCalculator.mortgageInterestRate = Number(interestRateInput.value);
        // HANDLING THE CONTAINER'S VISIBILITY
        mortgageCalculatorRightEmpty.classList.add('mortgage-calculator-right-empty-hidden');  
        mortgageCalculatorRightItself.classList.add('mortgage-calculator-right-itself-active');  

        const monthlyIterestRate = (mortgageCalculator.mortgageInterestRate / 100) / 12;
        const totalMonth = mortgageCalculator.mortgageTerm * 12;
        const calculatedOutput = String(mortgageCalculator.mortgageAmount * (monthlyIterestRate * (1 + monthlyIterestRate) ** totalMonth) / ((1 + monthlyIterestRate) ** totalMonth - 1));
        const dividerPoint = String(calculatedOutput.indexOf('.'));
        mortgageCalculator.mortgageMontlyRepayment = calculatedOutput.slice(0, Number(dividerPoint) + 3);
        mortgageCalculator.mortgageTotalRepayment = mortgageCalculator.mortgageMontlyRepayment * totalMonth;

        monthlyRepaymentText.textContent = `$ ${mortgageCalculator.mortgageMontlyRepayment}`;
        totalRepaymentText.textContent = `$ ${mortgageCalculator.mortgageTotalRepayment}`;
    };
};

// RESETTING THE FORM

function resettingTheForm() {
    mortgageCalculator.mortgageAmount = 0;
    mortgageCalculator.mortgageTerm = 0;
    mortgageCalculator.mortgageInterestRate = 0;
    mortgageCalculator.mortgageMontlyRepayment = 0;
    mortgageCalculator.mortgageTotalRepayment = 0;

    // 
    mortgageCalculatorRightEmpty.classList.remove('mortgage-calculator-right-empty-hidden');  
    mortgageCalculatorRightItself.classList.remove('mortgage-calculator-right-itself-active');

    // INPUTS
    for (const input of inputs) {
        input.value = '';
    };
 
    // RADIO INPUTS
    for (const radioInput of radioInputs) {
        radioInput.checked = false;
    };
};

// INITIALIZE BUTTON
clearEverythingButton.addEventListener('click', resettingTheForm);
calculateMortgageButton.addEventListener('click', calculatingTheMortgage);
const confirmBtn = document.querySelector('.submit-btn');
const form = document.querySelector('form');

const cardNumberInput = document.querySelector('.card-number-input')
const cardHolderInput = document.querySelector('.card-holder-input');
const monthInput = document.querySelector('.month-input')
const yearInput = document.querySelector('.year-input');
const cvv = document.querySelector('.cvv-input')


cardHolderInput.oninput = () => {
    document.querySelector('.card-holder-name').innerHTML = cardHolderInput.value;
};

cardNumberInput.oninput = () => {
    document.querySelector('.card-number-box').innerHTML = cardNumberInput.value;
};

monthInput.oninput = () => {
    document.querySelector('.exp-month').innerHTML = monthInput.value;
};

yearInput.oninput = () => {
    document.querySelector('.exp-year').innerHTML = yearInput.value;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const values = {
        'Card Holder': cardHolderInput.value.toUpperCase(),
        'Holders Card Number': cardNumberInput.value,
        'Card Expires': monthInput.value + '.' + yearInput.value,
        'CVV': cvv.value
    }

    console.log(values);
});

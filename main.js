const amount = document.querySelector('#amount');
const term = document.querySelector('#term');
const rate = document.querySelector('#rate');
const repayment = document.querySelector('#repayment');
const only = document.querySelector('#only');
const form = document.querySelector('form')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(formData.get("amount"));
})
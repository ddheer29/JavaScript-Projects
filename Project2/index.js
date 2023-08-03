const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const range = document.querySelector('#weight-guide');
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please enter a valid height';
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please enter a valid weight';
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`
        if (bmi < 18.6) {
            range.innerHTML = `<span>You are Under Weigth</span>`
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            range.innerHTML = `<span>You are Weigth is Normal</span>`
        }
        else if (bmi > 24.9) {
            range.innerHTML = `<span>You are Over Weigth</span>`
        }
    }

})
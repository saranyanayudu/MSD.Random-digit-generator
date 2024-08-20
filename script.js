document.getElementById('generateButton').addEventListener('click', function() {
    const min = parseInt(document.getElementById('minValue').value);
    const max = parseInt(document.getElementById('maxValue').value);
    const resultElement = document.getElementById('result');

    if (isNaN(min) || isNaN(max) || min >= max) {
        resultElement.textContent = 'Please enter valid minimum and maximum values.';
        resultElement.style.color = '#ff0000'; 
        return;
    }

    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    resultElement.textContent = `Random Number: ${randomNum}`;
    resultElement.style.color = '#007bff'; 
});

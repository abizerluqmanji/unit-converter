const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

celsiusInput.addEventListener('input', () => {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = celsiusToFahrenheit(celsius);
    fahrenheitInput.value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(2);
});

fahrenheitInput.addEventListener('input', () => {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = fahrenheitToCelsius(fahrenheit);
    celsiusInput.value = isNaN(celsius) ? '' : celsius.toFixed(2);
});

function celsiusToFahrenheit(celsius) {
    return ((celsius * 9 / 5) + 32).toFixed(1);
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9).toFixed(1);
}

function kilometersToMiles(kilometers) {
    return (kilometers * 0.621371).toFixed(2);
}

function milesToKilometers(miles) {
    return (miles / 0.621371).toFixed(2);
}

function handleConversion(event) {
    const input = event.target;
    const value = parseFloat(input.value);

    if (isNaN(value)) {
        // Handle invalid input (clear other input)
        clearOtherInput(input);
        return;
    }

    const otherInput = getOtherInput(input);

    switch (input.id) {
        case 'celsius':
            otherInput.value = celsiusToFahrenheit(value);
            break;
        case 'fahrenheit':
            otherInput.value = fahrenheitToCelsius(value);
            break;
        case 'kilometers':
            otherInput.value = kilometersToMiles(value);
            break;
        case 'miles':
            otherInput.value = milesToKilometers(value);
            break;
    }
}

function getOtherInput(input) {
    const row = input.parentElement;
    return row.querySelector('input:not([id="' + input.id + '"])');
}

function clearOtherInput(input) {
    const otherInput = getOtherInput(input);
    otherInput.value = '';
}

const conversionRows = document.querySelectorAll('.conversion-row');

conversionRows.forEach(row => {
    const inputs = row.querySelectorAll('input');
    inputs.forEach(input => input.addEventListener('input', handleConversion));
});

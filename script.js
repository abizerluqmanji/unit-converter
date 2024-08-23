const MILESTOKILOMETERS = 1.6093
const INCHESTOCENTIMETERS = 2.54
const GALLONSTOLITERS = 3.7854
const FLUIDOUNCESTOMILLILITERS = 29.5735
const POUNDSTOKILOGRAMS = 0.4535
const OUNCESTOGRAMS = 28.3495
const USDTOINR = 84 // Approximate value

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9).toFixed(1);
}

function celsiusToFahrenheit(celsius) {
    return ((celsius * 9 / 5) + 32).toFixed(1);
}

function convert(value, conversionFactor) {
    return (value * conversionFactor).toFixed(2)
}

function handleConversion(event) {
    const input = event.target;
    const value = parseFloat(input.value);

    const otherInput = input.parentElement.querySelector('input:not([id="' + input.id + '"])');

    if (isNaN(value)) {
        otherInput.value = '';
        return;
    }

    switch (input.id) {
        case 'fahrenheit':
            otherInput.value = fahrenheitToCelsius(value);
            break;
        case 'celsius':
            otherInput.value = celsiusToFahrenheit(value);
            break;
        case 'miles':
            otherInput.value = convert(value, MILESTOKILOMETERS);
            break;
        case 'kilometers':
            otherInput.value = convert(value, 1 / MILESTOKILOMETERS);
            break;
        case 'inches':
            otherInput.value = convert(value, INCHESTOCENTIMETERS);
            break;
        case 'centimeters':
            otherInput.value = convert(value, 1 / INCHESTOCENTIMETERS);
            break;
        case 'gallons':
            otherInput.value = convert(value, GALLONSTOLITERS);
            break;
        case 'liters':
            otherInput.value = convert(value, 1 / GALLONSTOLITERS);
            break;
        case 'fluidOunces':
            otherInput.value = convert(value, FLUIDOUNCESTOMILLILITERS);
            break;
        case 'milliliters':
            otherInput.value = convert(value, 1 / FLUIDOUNCESTOMILLILITERS);
            break;
        case 'pounds':
            otherInput.value = convert(value, POUNDSTOKILOGRAMS);
            break;
        case 'kilograms':
            otherInput.value = convert(value, 1 / POUNDSTOKILOGRAMS);
            break;
        case 'ounces':
            otherInput.value = convert(value, OUNCESTOGRAMS);
            break;
        case 'grams':
            otherInput.value = convert(value, 1 / OUNCESTOGRAMS);
            break;
        case 'usd':
            otherInput.value = convert(value, USDTOINR);
            break;
        case 'inr':
            otherInput.value = convert(value, 1 / USDTOINR);
            break;
    }
}

const conversionRows = document.querySelectorAll('.conversion-row');

conversionRows.forEach(row => {
    const inputs = row.querySelectorAll('input');
    inputs.forEach(input => input.addEventListener('input', handleConversion));
});

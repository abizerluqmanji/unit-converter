const MILESTOKILOMETERS = 1.6093;
const INCHESTOCENTIMETERS = 2.54;
const GALLONSTOLITERS = 3.7854;
const FLUIDOUNCESTOMILLILITERS = 29.5735;
const MPGTOKMPL = 0.4251;
const POUNDSTOKILOGRAMS = 0.4535;
const OUNCESTOGRAMS = 28.3495;
let USDTOINR = 85; // Default fallback value

async function fetchExchangeRate() {
    try {
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await response.json();
        USDTOINR = data.rates.INR;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
    }
    document.querySelector('#inr').placeholder = USDTOINR.toFixed(2);
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9).toFixed(1);
}

function celsiusToFahrenheit(celsius) {
    return ((celsius * 9 / 5) + 32).toFixed(1);
}

function convert(value, conversionFactor) {
    return (value * conversionFactor).toFixed(2);
}

function handleConversion(event) {
    const input = event.target;
    const value = input.value;

    const otherInput = input.parentElement.querySelector('input:not([id="' + input.id + '"])');

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
        case 'mpg':
            otherInput.value = convert(value, MPGTOKMPL);
            break;
        case 'kmpl':
            otherInput.value = convert(value, 1 / MPGTOKMPL);
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

fetchExchangeRate();

const conversionRows = document.querySelectorAll('.conversion-row');

conversionRows.forEach(row => {
    const inputs = row.querySelectorAll('input');
    inputs.forEach(input => input.addEventListener('input', handleConversion));
});

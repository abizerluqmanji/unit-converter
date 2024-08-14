function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9).toFixed(1);
}

function celsiusToFahrenheit(celsius) {
    return ((celsius * 9 / 5) + 32).toFixed(1);
}

function milesToKilometers(miles) {
    return (miles * 1.6093).toFixed(2);
}

function kilometersToMiles(kilometers) {
    return (kilometers / 1.6093).toFixed(2);
}

function gallonsToLiters(gallons) {
    return (gallons * 3.7854).toFixed(2);
}

function litersToGallons(liters) {
    return (liters / 3.7854).toFixed(2);
}

function poundsToKilograms(pounds) {
    return (pounds * 0.4535).toFixed(2);
}

function kilogramsToPounds(kilograms) {
    return (kilograms / 0.4535).toFixed(2);
}

function ouncesToGrams(ounces) {
    return (ounces * 28.3495).toFixed(2);
}

function gramsToOunces(grams) {
    return (grams / 28.3495).toFixed(2);
}

function USDToINR(usd) {
    return (usd * 84).toFixed(2);
}

function INRToUSD(inr) {
    return (inr / 84).toFixed(2);
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
            otherInput.value = milesToKilometers(value);
            break;
        case 'kilometers':
            otherInput.value = kilometersToMiles(value);
            break;
        case 'gallons':
            otherInput.value = gallonsToLiters(value);
            break;
        case 'liters':
            otherInput.value = litersToGallons(value);
            break;
        case 'pounds':
            otherInput.value = poundsToKilograms(value);
            break;
        case 'kilograms':
            otherInput.value = kilogramsToPounds(value);
            break;
        case 'ounces':
            otherInput.value = ouncesToGrams(value);
            break;
        case 'grams':
            otherInput.value = gramsToOunces(value);
            break;
        case 'usd':
            otherInput.value = USDToINR(value);
            break;
        case 'inr':
            otherInput.value = INRToUSD(value);
            break;
    }
}

const conversionRows = document.querySelectorAll('.conversion-row');

conversionRows.forEach(row => {
    const inputs = row.querySelectorAll('input');
    inputs.forEach(input => input.addEventListener('input', handleConversion));
});

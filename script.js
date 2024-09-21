const MILESTOKILOMETERS = 1.6093;
const INCHESTOCENTIMETERS = 2.54;
const GALLONSTOLITERS = 3.7854;
const FLUIDOUNCESTOMILLILITERS = 29.5735;
const POUNDSTOKILOGRAMS = 0.4535;
const OUNCESTOGRAMS = 28.3495;
const USDTOINR = 84; // Approximate value

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9).toFixed(1);
}

function celsiusToFahrenheit(celsius) {
    return ((celsius * 9 / 5) + 32).toFixed(1);
}

function isDSTActive() {
    const today = new Date();
    const year = today.getFullYear();

    // DST starts at 2:00 AM on the second Sunday of March
    const dstStart = new Date(year, 2, 1);
    dstStart.setDate(dstStart.getDate() + (14 - dstStart.getDay()) % 7);
    dstStart.setHours(2, 0, 0, 0);

    // DST ends at 2:00 AM on the first Sunday of November
    const dstEnd = new Date(year, 10, 1);
    dstEnd.setDate(dstEnd.getDate() + (7 - dstEnd.getDay()) % 7);

    return today >= dstStart && today < dstEnd;
}

function applyTimezoneOffset(timeString, offsetHours, offsetMinutes) {
    const [hours, minutes] = timeString.split(':').map(Number);

    let newHours = hours + offsetHours;
    let newMinutes = minutes + offsetMinutes;

    if (newMinutes < 0) {
        newMinutes += 60;
        newHours -= 1;
    }
    else if (newMinutes >= 60) {
        newMinutes -= 60;
        newHours += 1;
    }

    newHours = (newHours + 24) % 24;

    return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
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
        case 'et':
            otherInput.value = applyTimezoneOffset(value, isDSTActive() ? 9 : 10, 30);
            break;
        case 'ist':
            otherInput.value = applyTimezoneOffset(value, isDSTActive() ? -9 : -10, -30)
            break;
    }
}

const conversionRows = document.querySelectorAll('.conversion-row');

conversionRows.forEach(row => {
    const inputs = row.querySelectorAll('input');
    inputs.forEach(input => input.addEventListener('input', handleConversion));
});

function convertFahrToCelsius(Fahr) {
    var degC;
    var Fahr;
    if (isNaN(Fahr)) {
        if (Array.isArray(Fahr)) {
            console.log(JSON.stringify(Fahr) + " is not a valid number but a/an array");
        } else if (typeof(Fahr) == 'object') {
            console.log(JSON.stringify(Fahr) + " is not a valid number but a/an object");
        } else {
            console.log(Fahr + " is not a valid number but a/an " + typeof(Fahr));
        }
        return Fahr;
    } else {
        degC = ((Fahr - 32) * 5 / 9);
        console.log(degC.toFixed(4) + "\xB0C");
        return degC;
    }
}

console.log('CONVERSION OF TEMPERATURE FROM FAHRENHEIT TO DEGREES CELSIUS');
console.log('..............................................................')
console.log('')
convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1, 2, 3]);
convertFahrToCelsius({ "temp": 0 });
convertFahrToCelsius("Meat");
convertFahrToCelsius("32");

console.log('')
console.log('*****************************************************************************************************************');
console.log('/===/ /===/ /===/ /===/ /===/ /===/ /===/ /===/ /===/ /===/ /===/ /===/ /===/ /===/ /===/ /===/ /===/ /===/ /===/');
console.log('*****************************************************************************************************************');
console.log('')


function checkYuGiOh(n) {
    const numbers = Array.from({ length: n }, (_, n) => n + 1);
    for (var n = 1; n <= numbers.length; n++) {
        if (n % 2 === 0 && n % 3 === 0 && n % 5 === 0) {
            console.log("yu-gi-oh");
        } else if (n % 2 === 0 && n % 3 === 0) {
            console.log("yu-gi");
        } else if (n % 3 === 0 && n % 5 === 0) {
            console.log("gi-oh");
        } else if (n % 2 === 0 && n % 5 === 0) {
            console.log("yu-oh");
        } else if (n % 2 === 0) {
            console.log("yu");
        } else if (n % 3 === 0) {
            console.log("gi");
        } else if (n % 5 === 0) {
            console.log("oh");
        } else if (n === 'string') {
            console.log("Invalid parameter: " + JSON.stringify(n));
        } else {
            console.log(n);
        }
    }
}
checkYuGiOh(5);
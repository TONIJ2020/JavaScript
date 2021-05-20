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

console.log('                        QUESTION (1)                        ');
console.log('');
console.log('CONVERSION OF TEMPERATURE FROM FAHRENHEIT TO DEGREES CELSIUS');
console.log('============================================================');
console.log('')
convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1, 2, 3]);
convertFahrToCelsius({ "temp": 0 });
convertFahrToCelsius("Meat");
convertFahrToCelsius("32");

console.log('');
console.log('');
console.log('*****************************************************************************************************************');
console.log('*****************************************************************************************************************');
console.log('');
console.log('');
console.log('');


console.log('                                             QUESTION (2)                                           ');
console.log('');
console.log('CREATION OF CHECKYUGIOH FUNCTION THAT RETURNS ARRAYS WITH MULTIPLES OF 2, 3, 5 REPLACED WITH STRINGS');
console.log('====================================================================================================');
const checkYuGiOh = (n) => {
    var n;
    if (isNaN(n) == true) {
        if (Array.isArray(n) == true) {
            console.log("Invalid parameter: " + JSON.stringify(n));
            return n;
        } else if (typeof(n) == "object") {
            console.log("Invalid paramter: " + JSON.stringify(n));
            return n;
        } else {
            console.log("Invalid paramter: " + JSON.stringify(n));
            return n;
        }
    } else {
        var ans;
        ans = create(n);

        function create(n) {
            var n;
            var arr = [];
            for (i = 1; i <= n; i++) {
                if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
                    arr.push("yu-gi-oh");
                } else if (i % 2 == 0 && i % 3 == 0) {
                    arr.push("yu-gi");
                } else if (i % 2 == 0 && i % 5 == 0) {
                    arr.push("yu-oh");
                } else if (i % 3 == 0 && i % 5 == 0) {
                    arr.push("gi-oh");
                } else if (i % 5 == 0) {
                    arr.push("oh");
                } else if (i % 3 == 0) {
                    arr.push("gi");
                } else if (i % 2 == 0) {
                    arr.push("yu");
                } else {
                    arr.push(i);
                }
                console.log(arr);
            }
            return arr;
        }
        return ans;
    }
}
checkYuGiOh(10);
console.log('');
checkYuGiOh("5");
console.log('');
checkYuGiOh('fizzbuzz is meh');
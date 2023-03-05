const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollartoEuro = function(valueInDollar){
    let valueInEuro = Math.floor(valueInDollar / oneEuroIs.USD);
    return valueInEuro;
}

const fromDollarToYen = function(valueInDollar){     
    let valueInYen = fromDollartoEuro(valueInDollar) * oneEuroIs.JPY;
    return valueInYen;
}

const fromYentoEuro = function(valueInYen){
    let valueInEuro = Math.floor(valueInYen / oneEuroIs.JPY);
    return valueInEuro;
}

const fromYenToPound = function(valueInYen){
     let valueInBp = fromYentoEuro(valueInYen) * oneEuroIs.GBP;
     return valueInBp;
}

module.exports = { sum, fromEuroToDollar,fromEuroToDollar,fromYenToPound,fromDollarToYen}

console.log("Hello world");

const sum = (a,b) => {
    return a + b
}

//console.log(sum(7 + 3));

module.exports = {sum};



let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollar){
    return dollar * (109.68).toFixed(2);
}

function fromEuroToDollar(euro){
    return euro * (1.2).toFixed(2);
}

function fromYenToPound(yen){
    return yen * (0.0067).toFixed(4);
}
console.log(fromYenToPound(20));
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };
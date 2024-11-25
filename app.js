// conversiones.js
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87  // libra esterlina
};

const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD; // Convertir dólares a euros
    return euros * oneEuroIs.JPY; // Convertir euros a yenes
};

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
};

const fromYenToPound = (yen) => {
    const euros = yen / oneEuroIs.JPY; // Convertir yenes a euros
    return euros * oneEuroIs.GBP; // Convertir euros a libras esterlinas
};

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };

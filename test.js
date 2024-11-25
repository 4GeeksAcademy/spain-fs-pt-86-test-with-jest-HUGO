
// conversiones.test.js
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test('convierte dólares a yenes correctamente', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26); // 1 / 1.07 * 156.5
    expect(fromDollarToYen(10)).toBeCloseTo(1462.62); // 10 / 1.07 * 156.5
});

test('convierte euros a dólares correctamente', () => {
    expect(fromEuroToDollar(1)).toBe(1.07);
    expect(fromEuroToDollar(10)).toBe(10.7);
});

test('convierte yenes a libras esterlinas correctamente', () => {
    expect(fromYenToPound(1)).toBeCloseTo(0.00556); // 1 / 156.5 * 0.87
    expect(fromYenToPound(1000)).toBeCloseTo(5.56); // 1000 / 156.5 * 0.87
});

const calculator = require('./calculator');

test('Adds integers', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test('subtracts integers', () => {
    expect(calculator.subtract(7, 3)).toBe(4);
});

test('Multiples integers', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
});

test('Divides integers', () => {
    expect(calculator.divide(10, 5)).toBe(2);
});
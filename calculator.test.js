const calculator = require('./calculator');

test('Adds integers', () => {
    expect(add(2, 2)).toBe(4);
});

test('subtracts integers', () => {
    expect(subtract(7, 3)).toBe(4);
});

test('Multiples integers', () => {
    expect(multiply(5, 5)).toBe(25);
});

test('Divides integers', () => {
    expect(divide(5, 10)).toBe(2);
});
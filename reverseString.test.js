const reverseString = require('./reverseString');

test('Reverses the string.', () => {
    expect(reverseString('wonderland')).toBe('dnalrednow')
});
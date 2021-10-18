const capitalize = require('./capitalize');

test('Capitalizes the string', () => {
    expect(capitalize('string')).toBe('String');
});
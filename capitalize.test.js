const capitalize = require('./capitalize');

test('Capitalize test 1', () => {
    expect(capitalize('string')).toBe('String');
});
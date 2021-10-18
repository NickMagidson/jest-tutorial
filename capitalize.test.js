const { test } = require('picomatch');
const capitalize = require('./capitalize');

test('capitalizes the first character', () => {
    expect(capitalize('string')).toBe('String');
})
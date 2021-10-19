const ceasarCipher = require('./ceasarCipher');


test('Ceasar Cipher Test 1', () => {
    expect(ceasarCipher('hello world!', 0)).toBe('hello world!');
});

test('Ceasar Cipher Test 2', () => {
    expect(ceasarCipher('stay pony golden boy', 1),toBe('tubz qpoz hpmefo cpz'));
});

test('Ceasar Cipher Test 3', () => {
    expect(ceasarCipher("sometimes i've believed as many as six impossible things before breakfast", 4),toBe("tpnfujnft j'wf cfmjfwfe bt nboz bt tjy jnqpttjcmf uijoht cfgpsf csfblgbtu"));
});

test('Ceasar Cipher Test 4', () => {
    expect(ceasarCipher('she sailed the seven stars', 11),toBe('tif tbjmfe uif tfwfo tubst'));
});
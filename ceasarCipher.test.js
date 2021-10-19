const ceasarCipher = require('./ceasarCipher');


test('Ceasar Cipher Test 1', () => {
    expect(ceasarCipher('hello world!', 0)).toBe('hello world!');
});

test('Ceasar Cipher Test 2', () => {
    expect(ceasarCipher('stay pony golden boy', 1)).toBe('tubz qpoz hpmefo cpz');
});

test('Ceasar Cipher Test 3', () => {
    expect(ceasarCipher("sometimes i've believed as many as six impossible things before breakfast", 4)).toBe("wsqixmqiw m'zi fipmizih ew qerc ew wmb mqtswwmfpi xlmrkw fijsvi fvieojewx");
});

test('Ceasar Cipher Test 4', () => {
    expect(ceasarCipher('she sailed the seven stars', 11)).toBe('dsp dltwpo esp dpgpy delcd');
});
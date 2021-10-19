const arrayAnalysis = require('./arrayAnalysis');

test("Array test 1", () => {
    expect(arrayAnalysis([1, 8, 7, 4, 3, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

test("Array test 2", () => {
    expect(arrayAnalysis([2, 2, 2, 2, 2])).toEqual({
        average: 2,
        min: 2,
        max: 2,
        length: 5,
    });
});

test("Array test 2", () => {
    expect(arrayAnalysis([0])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 1,
    });
});
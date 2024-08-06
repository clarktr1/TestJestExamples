const fizzbuzz = require('../index.js');

describe('Check all fizzbuzz outputs', () => {

    //TO DO: write test cases to check all outputs of fizzbuzz

    test('fizzbuzz of 3 is fizz', () => {
        expect(fizzbuzz(3)).toBe('fizz');
    });

    test('fizzbuzz of 5 is buzz', () => {
        expect(fizzbuzz(5)).toBe('buzz');
    });

    test('fizzbuzz of 15 is fizzbuzz', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
    });

})

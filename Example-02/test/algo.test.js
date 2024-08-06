    const Algo = require('../index.js');

    describe('Check all algorithm outputs', () => {

        const algo = new Algo();

        test('Reverse string', () => {
            expect(algo.reverse('hello')).toBe('olleh');
        })

        test('highest number #1', () => {
            expect(algo.highestNumber([1, 2, 5])).toBe(5);
        })

        test('highest number #2', () => {
            expect(algo.highestNumber([])).toBe(null);
        })

        test('highest number #3', () => {
            expect(algo.highestNumber([1, 2, 5, 10, 20])).toBe(20);
        })

        test('prefix again #1', () => {
            expect(algo.prefixAgain('abXYabc', 1)).toBe(true);
        })

        test('prefix again #2', () => {
            expect(algo.prefixAgain('abXYabc', 2)).toBe(true);
        })

        test('prefix again #3', () => {
            expect(algo.prefixAgain('abXYabc', 3)).toBe(false);
        })

    })
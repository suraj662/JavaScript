describe('Number functionalities', () => {
    test('balance should be a Number object', () => {
        const balance = new Number(100);
        expect(typeof balance).toBe('object');
    });

    test('balance toString should return "100"', () => {
        const balance = new Number(100);
        expect(balance.toString()).toBe('100');
    });

    test('balance toString length should be 3', () => {
        const balance = new Number(100);
        expect(balance.toString().length).toBe(3);
    });

    test('balance toFixed(2) should return "100.00"', () => {
        const balance = new Number(100);
        expect(balance.toFixed(2)).toBe('100.00');
    });

    test('otherNumber toPrecision(3) should return "123"', () => {
        const otherNumber = 123.8966;
        expect(otherNumber.toPrecision(3)).toBe('123');
    });
});
import { calculateCost } from '../libs/billing-lib';

test('Lowest tier', () => {
    const storage = 10;

    const cost = 2000;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost)
});

test('Middle tier', () => {
    const storage = 100;

    const cost = 10000;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost)
});

test('Highest tier', () => {
    const storage = 101;

    const cost = 5050;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost)
});
export function calculateCost(storage) {
    const rate = storage <= 10 ?
        2 :
        storage <= 100 ?
        1 :
        0.5;

    return rate * storage * 100;
}
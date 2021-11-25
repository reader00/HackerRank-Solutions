function isPositive(a) {
    if (a == 0) {
        throw Error('Zero Error');
    } else if (a < 0) {
        throw Error('Negative Error');
    }
    return 'YES';
}

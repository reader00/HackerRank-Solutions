/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
    const reversed = [];
    for (let i = a.length - 1; i >= 0; i--) {
        reversed.push(a[i]);
    }
    return reversed;
    // return reversed.reverse();
}

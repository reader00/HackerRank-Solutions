/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
    // Write your code here
    const arr = [];
    const result = [];
    let lastAnswer = 0;

    for (let i = 0; i < n; i++) {
        arr.push([]);
    }

    for (let i = 0; i < queries.length; i++) {
        let idx = (queries[i][1] ^ lastAnswer) % n;
        console.log(idx);
        if (queries[i][0] == 1) {
            arr[idx].push(queries[i][2]);
            continue;
        }
        lastAnswer = arr[idx][queries[i][2] % arr[idx].length];
        result.push(lastAnswer);
    }
    return result;
}

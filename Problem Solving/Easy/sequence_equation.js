/*
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function permutationEquation(p) {
    // Write your code here
    const result = [];
    for (let i = 1; i <= p.length; i++) {
        result.push(p.indexOf(p.indexOf(i) + 1) + 1);
    }

    return result;
}

/*
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */
function count1(a, b) {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == '1' || b[i] == '1') {
            result++;
        }
    }
    return result;
}

function cutTheSticks(arr) {
    // Write your code here
    const l = arr.length;
    const result = [];
    for (let i = 0; i < l; i++) {
        if (arr.length == 0) {
            break;
        }
        result.push(arr.length);
        const min = Math.min(...arr);
        arr = arr.filter((e) => e > min).map((e) => e - min);
    }
    return result;
}

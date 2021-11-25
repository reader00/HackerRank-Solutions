function arrayManipulation(n, queries) {
    // Write your code here
    let result;
    let m = queries.length;
    let container = [[]];
    for (let i = 0; i < n; i++) {
        container[0].push(0);
    }

    for (let i = 0; i < m; i++) {
        let temp = [];
        let a = queries[i][0] - 1;
        let b = queries[i][1] - 1;
        let k = queries[i][2];

        for (let j = 0; j < n; j++) {
            if (j >= a && j <= b) {
                temp.push(container[i][j] + k);
            } else {
                temp.push(container[i][j]);
            }
        }

        container.push(temp);
    }
    container = [].concat(...container);
    result = Math.max(...container);

    return result;
}

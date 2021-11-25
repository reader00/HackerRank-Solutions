const getMaxLessThanK = (n, k) => {
    let max = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            const and = i & j;
            if (max < and && and < k) {
                max = and;
            }
        }
    }
    return max;
};

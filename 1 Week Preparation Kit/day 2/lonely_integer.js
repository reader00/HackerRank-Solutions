function lonelyinteger(a) {
    // Write your code here
    const o = {};
    for (let i = 0; i < a.length; i++) {
        const t = a[i];
        if (o[t]) {
            o[t]++;
        } else {
            o[t] = 1;
        }
    }
    return Object.keys(o).filter((e) => o[e] == 1)[0];
}

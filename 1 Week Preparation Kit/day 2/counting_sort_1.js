function countingSort(arr) {
    const a = Array.from({ length: 100 }, (x) => 0);
    for (let i = 0; i < arr.length; i++) {
        a[arr[i]]++;
    }
    return a;
}

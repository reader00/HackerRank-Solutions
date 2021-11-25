function getSecondLargest(nums) {
    // Complete the function
    const s = new Set(nums);
    return Array.from(s).sort((a, b) => a - b)[s.size - 2];
}

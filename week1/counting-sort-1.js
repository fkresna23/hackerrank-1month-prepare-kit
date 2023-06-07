function countingSort(arr) {
    let counts = Array(100).fill(0);
    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]]++;
    }
    return counts;
}
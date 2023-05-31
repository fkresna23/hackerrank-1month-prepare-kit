function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);

    let minSum = 0;
    let maxSum = 0;

    for (let i = 0; i < 4; i++) {
        minSum += arr[i];
        maxSum += arr[arr.length - 1 - i];
    }

    console.log(minSum + " " + maxSum)
}
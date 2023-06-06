function flippingBits(n) {
    // Membangun string biner dengan 32 bit
    let binary = n.toString(2).padStart(32, '0');

    // Melakukan flipping bits
    let flippedBinary = '';
    for (let i = 0; i < binary.length; i++) {
        flippedBinary += binary[i] === '0' ? '1' : '0';
    }

    // Mengonversi kembali ke bilangan desimal
    let result = parseInt(flippedBinary, 2);

    return result;
}

function flippingBitsBatch(arr) {
    let results = [];

    for (let i = 0; i < arr.length; i++) {
        results.push(flippingBits(arr[i]));
    }

    return results;
}

// Contoh penggunaan
let queries = 3;
let numbers = [9, 14, 2];

let results = flippingBitsBatch(numbers);
console.log(results); // Output: [4294967286, 4294967281, 4294967293]

function processArray(numbers) {
    return numbers.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const processedArray = processArray(inputArray);
console.log(processedArray); // Output: [3, 4, 9, 16, 15]
 
function processArray(numbers) {
    return numbers.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const processedArray = processArray(inputArray);
console.log(processedArray); // Output: [3, 4, 9, 16, 15]
 // Function to process the array of numbers
function processArray(numbers) {
    return numbers.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Function to format array strings based on the processed numbers
function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error("Both arrays must have the same length");
    }

    return strings.map((str, index) => {
        return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}


const stringArray = ["hello", "world", "JavaScript", "is", "fun"];
const numberArray = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numberArray);
const formattedStrings = formatArrayStrings(stringArray, processedNumbers);

console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]
console.log(formattedStrings); // Output: ["hello", "WORLD", "javascript", "IS", "fun"]

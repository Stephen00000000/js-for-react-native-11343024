// Function to create user profiles
function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error("Both arrays must have the same length");
    }

    return originalNames.map((originalName, index) => {
        return {
            id: index + 1,
            originalName: originalName,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage
const originalNames = ["Akowuah", "BISMARK", "Charlie", "David", "yaw"];
const modifiedNames = ["AKOWUAH", "bismark", "CHARLIE", "david", "YAW"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(userProfiles);
// Output: 
// [
//   { id: 1, originalName: "Akowuah", modifiedName: "AKOWUAH" },
//   { id: 2, originalName: "Bismark", modifiedName: "bismark" },
//   { id: 3, originalName: "Charlie", modifiedName: "CHARLIE" },
//   { id: 4, originalName: "David", modifiedName: "david" },
//   { id: 5, originalName: "yaw", modifiedName: "YAW" }
// ]

module.exports = { createUserProfiles };

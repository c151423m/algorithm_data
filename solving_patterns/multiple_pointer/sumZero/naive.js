
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))// [-3,3] 
console.log(sumZero([-2, 0, 1, 3]))   // undefined
console.log(sumZero([1, 2, 3])) // undefined

/**
 * Nested loop to through all the array values combination.
 * If sum returns 0, then it should return the actual value
 * This works but due nested value structure, the bin O notation is O(n^2)
 */
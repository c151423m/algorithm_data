


function countUniqueValues(arr) {
  let leader = 1
  let guide = 0
  for (let x = 0; x < arr.length; x++) {
    if (arr[guide] === arr[leader]) {
      leader++;
    } else {
      guide++
      arr.splice(guide, 1, arr[leader])
      leader++
    }
  }
  return guide
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))

// Example Inputs
// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

/**
 * - Have pointer leader and guide
 * - i will ve pointing 0 and j will be pointing 1
 * - compare i and j and if they are equal, move j
 *  - if they are not same , move i and splice j value to where the i is.
 *  - move j to the right
 * - Continue the loop until j reaches to the end
 * - return the i position. By then all the unique values should be moved to the top and i.length should return the unique values
 *
 */
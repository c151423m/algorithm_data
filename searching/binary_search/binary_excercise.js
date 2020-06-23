// Write a function called binarySearch which accepts a sorted array
// and a value and returns the index at which the value exists.
// Otherwise, return -1

// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
// https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] < val) {
      left = middle + 1;
    } else if (arr[middle] > val) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(
  binarySearch(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    18
  )
);

/**
 * 1. Initialise Left as arr[0] and Right arr [-1]
 * 2. Implement while loop
 *  2-1 while left < right
 *  2-2 create middle pointer ( better to use Math.floor)
 *  2-3 If the middle === val then return the index of the middle
 *  2-4 If the middle < val -> left should be moved to left[middle+1]
 *  2-5 If the middle > val -> Right should be move to right[middle-1]
 * 3. If we could not find the value, return -1
 */

function search(array, val) {

  //`
  let min = 0;
  let max = array.length - 1;

  //2
  while (min <= max) {
    //3
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];
    //4
    if (array[middle] < val) {
      min = middle + 1;
    }
    //5
    else if (array[middle] > val) {
      max = middle - 1;
    }
    else {
      return middle;
    }
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 18], 14));


/**
 * AKA binary search
 * You cut the array to small chunks and see if each block has the target number
 * If not , remove the chunk and continue the division
 */

/**
 * 1. Make two value min ( which will start from the left of the array ) and
 * max ( Has the last maximum value)
 * 2. WHile min is bigger than max
 * 3. make a variable called middle , which basically returs the middle value of min + max.
 * 3-1 it is using Math.floor to make the number into whole number, not a float
 * 4. If the middle value ( array[middle]) is smaller than val, move the min to middle + 1 point
 * 5. if the middle value is bigger than val, move the max to middle -1 point
 * 6. Continue the middle calculation and go through the if checks 
 */
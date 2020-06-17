function collectOddValues(arr) {
  //1
  let newArr = [];
  //2
  if (arr.length === 0) {
    return newArr;
  }
  //3
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  //4
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([33, 57, 88, 66, 48, 79, 100, 123]));


/**
 * collectOddValues([1,2,3,4,5])
 * [1].concat(collectOddValues([2,3,4,5]))
 *        [].concat(collectOddValues([3,4,5]))
 *                   [3].concat(collectOddValues([4,5]))
 *                            [].concat(collectOddValues([5]))
 *                                  [5].concat(collectOddValues([]))
 * 
 * Above stream will be concatenated. 
 */

/**
 * A so-called pure recursion
 * This is an alternative of helper method recursion
 *
 * 1. Make an empty arr where you store the odd numbers
 * 2. Check if the arr.length is 0 . If 0, then return the array
 * 3. Check if the array returns odd
 * *  3-1 If it does return odd, then we push that number ( which should be located on 0 )
 * 4. have concat function with recursion inside the concat.
 *  4-1 this function should slice(1) to cut the first value off
 *  4-2 when the length hits 0, it will start concatenating all the recursion and assign to newArr
 *
 *
 * +++ Why concatenate ?++++
 * Because this does not have outer layer, whenever you run the recursion, the array will be reset.
 * The concatenation is to have the temporal storage point.
 * of previous function call and add them all together at the end.
 * +++++++++++++++++++++++++++
 *
 */

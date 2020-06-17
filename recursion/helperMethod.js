function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}


console.log(collectOddValues([1,11,55,2222,85,26,456,8557,34,666,2223,777]));


/**
 * Helper recursion is to have recursion inside of another function,
 * and the result of inner recursion will be return to outer function
 * 
 * 1. Initiate result array
 * 2. call helper(arr)
 *  3. If the length of arr is 0, return 
 *  4. If not, check if the first value ( index 0 ) is an odd number.
 *    5. If it is an odd number, push that result to the outer array ( result)
 *    6. Call the helper function again where the parameter is slicing the first value ( which is index 0 )
 *  7. When the helper input length is 0, then return and return result. 
 */
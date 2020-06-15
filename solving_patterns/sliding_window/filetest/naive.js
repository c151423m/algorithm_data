function maxSubarraySum(arr, num) {
  //1
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  //2
  for (let i = 0; i < arr.length - num + 1; i ++){
    //3
    temp = 0;
    //4
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}


console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null


/**
 * 1. Security for the edge case. In case the num is bigger than the array, return false
 * 2. for loop 
 *  2-1 the -num +1 is to stop the loop at the final num length
 * 3. have a temporary variable = temp 
 * 4. For loop inside i with j and sum the numbers based on num index and store it under temp
 * 5. If temp is bigger than max, then assign the value into max 
 * 6. Continue the summation and assign the max number into var max 
 * 7. return max 
 */
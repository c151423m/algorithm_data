function maxSubarraySum(arr, num) {
  //1
  if ( num > arr.length){
    return null;
  }
  //2
  var max = -Infinity;
  //3
  for (let i = 0; i < arr.length - num + 1; i ++){
    //4
    temp = 0;
    //5
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
 * 1. Security for the edge case. In case the num is bigger than 
 */
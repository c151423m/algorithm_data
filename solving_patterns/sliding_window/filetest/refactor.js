function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  //1
  if (arr.length < num) return null;
  //2
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  //3
  for (let i = num; i < arr.length; i++) {
    //4
    tempSum = tempSum - arr[i - num] + arr[i];
    //5
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));


/**
 * 1. Edge case detection for if num is bigger than arr.length.
 * 2. The Fist loop will sum array based on num. For example, if num = 3 , the for loop will add the first 3 together
 * 2-1 Put the maxSum value into tempSum for now
 * 3. Have another for loop which starts from i = num, meaning the continued value.
 * 4. This part will subtract tempsum with arr[i(num+? loop)-num] +arr[i]
 *  4-1 it is basically shifting the array one by one to the right
 *5 Then the maxSum will check the maxnumber based on maxSum or tempSum and return the max summ of subarray
 */
function sumZero(arr){
  //1
  let left = 0;
  let right = arr.length - 1;
  //2
  while(left < right){
      let sum = arr[left] + arr[right];
      if(sum === 0){
          return [arr[left], arr[right]];
      } else if(sum > 0){
          right--;
      } else {
          left++;
      }
  }
}

/**
 * 1. initialize left and right.
 *  1-1 Left will have the first value from the left
 *  1-2 right will have the last value from the right of the array ( hence length -1)
 *  NOTE: if you want the last value, -1 the length because array starts from 0 index
 * 2 While loop until the left value is bigger than right value
 *  2-1 assign arr[left] + arr[right], into sum , which should give the answer if the sum of left and right values will return 0 or not
 *    2-2 if the sum is 0, it will fulfill the question. So you can return the value
 *      2-3 if not, check if the sum is bigger than 0
 *      2-4 if YES (sum is bigger than 0) , then minus 1 from right. This will then move the pointer of right to inside
 *      2-5 IF NO, move the left pointer inside
 *  2-5 Go back the while loop and check if the sum of left (0) + right(-2) return 0
 *    2-6 IF yes, return the value and end
 *    2-7 IF NO, check if the sum is bigger than 0
 *      2-8 IF bigger than 0, move right pointer
 *      2-9 IF smaller than 0 mover left pointer.
 *
 * The loop will check and pointer will move towards inside while calculating the values
 * When the sum becomes 0 it will return the value as an answer.
 *
 * 
 * This solution has no nested loop 
 */
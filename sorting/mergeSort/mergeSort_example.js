function merge(arr1, arr2){
  // make an empty array where the merged array will be pushed
  let results = [];
  // have i and j which will be the tracer for going through the array
  let i = 0;
  let j = 0;

  //have a while loop for while i and j are smaller than the length.
  while(i < arr1.length && j < arr2.length){
    //check if 1st array value is smaller than 2nd array value
      if(arr2[j] > arr1[i]){
        // if it is , push the array1 1st value 
          results.push(arr1[i]);
          // move the pointer
          i++;
      } else {
        // else if the 2nd array value is smaller, 
        //push array 2 j value
          results.push(arr2[j])
          // move the j pointer
          j++;
      }
  }
  //This is to check if there are any remaining values in the arrays.
  // if the pointer has already reached to the end, the push will not be executed
  while(i < arr1.length) {
      results.push(arr1[i])
      i++;
  }
  while(j < arr2.length) {
      results.push(arr2[j])
      j++;
  }
  // finally return value
  return results;
}

function mergeSort(arr) {

  //if the length of the array is smaller or equal to 1, return the arry
  if (arr.length <= 1) return arr;

  // We will firs define the middle in the array with math floor
  let mid = Math.floor(arr.length / 2);

  //run mergeSort again and slice the array based on mid ground
  //Then it will run the merge sort again.
  // If the length of the array is smaller than 1? then above return arr AS left
  //This will make the arr1 of abover merge function
  let left = mergeSort(arr.slice(0, mid));


  // When left is done, right will start slicing
  // If this length is smaller than 1, then this will be returned as arr AS right 
  let right = mergeSort(arr.slice(mid));

  //Once returned the above function will run to sort 
  return merge(left, right);


  // This will continue until the array is mergeSorted
}

console.log(mergeSort([10,24,76,73]));
console.log(mergeSort([100,2499,76888,737978,2398471,1113,0,91341,435]));

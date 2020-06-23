// Merge arrays and sort in order


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
merge([100,200], [1,2,3,5,6])

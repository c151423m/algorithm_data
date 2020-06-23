function insertionSort(arr) {
  //create  variable
  var currentVal;
  // for loop the second element
  for (var i = 1; i < arr.length; i++) {
    // store  i into current val
    var currentVal = arr[i];
    //for loop first element (i-1) and loop while j is bigger than 0
    //and j is bigger than current val ( i ), swap values
    //If not bigger than current val, 
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    //If not, 
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));


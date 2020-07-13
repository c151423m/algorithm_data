function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {

      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}


//Version where i is looping from the end 

console.log(bubbleSort([37, 45, 29, 8, 99, 24, 57]));

function bubbleSort1(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {

      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}




function bubbleSort3(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {

      if (arr[j] > arr[j + 1]) {
        swap(j,j+1,arr)
      }
    }
  }
  return arr;
}

function swap(i,j,arr){
  const temp = arr[j];
  arr[j] = arr[j+1]
  arr[j+1] = temp 
}

console.log(bubbleSort3([37, 45, 29, 8, 99, 24, 57]));

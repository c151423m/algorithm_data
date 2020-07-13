// First Version
function pivot(arr, start=0, end=arr.length+1){
    //function to swap elements
    /**
     * 
     * @param {array} array 
     * @param {index} i 
     * @param {index} j 
     * 
     * within then main source array, we take param i and j which are both index of array.
     */
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  
    var pivot = arr[start];
    var swapIdx = start;
  
    //i is +1 because 0 is the pivot variable
    for(var i = start + 1; i < arr.length; i++){
        //when pivot is bigger than i
      if(pivot > arr[i]){
          //increment the swapindex count. 
          //swapIdx will be used as final guiding point for swapping variables and pivots
        swapIdx++;
        //for all the element smaller than pivot will be shifted to the left
        //by using swap
        //(array , where the swap count is , where the i is )
        swap(arr,swapIdx,i);
      }
    }
    //finally swap pivot point with the swap idx point
    swap(arr,start,swapIdx);
    return swapIdx;
  }
 

function quickSort(arr, left = 0, right = arr.length -1){
  if(left < right){
      let pivotIndex = pivot(arr, left, right) //3
      //left : you want to use pivotIndex-1 to sort only the leftside of pivot
      quickSort(arr,left,pivotIndex-1);
      //right : you want to use pivotIndex +1 to start right side with end point right to sort only right
      quickSort(arr,pivotIndex+1,right);
    }
   return arr;
} 
         
console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))
console.log(pivot([100,-3,2,4,6,9,1,2,5,3,23]))
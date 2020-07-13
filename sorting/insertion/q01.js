//Write a function to sort an array with inserstion sort.


// Sample input 
// array = [8,5,2,9,5,6,3]

// Sample Output
// [2,3,5,5,6,8,9]

/**
 * In this scenario , we will be using helper function to commit the swapping
 */

 function inserstionSort(arr){

    //The basic concept of insertion sort is to compare the index[1] with index[1-1]
    //If [1-1] is bigger, we must swap with the index[1]
    //If not , continue the loop

// Start from index 1
     for(let i =1; i<arr.length;i++){

        // Assign j with i

         let j=i

         /**
          * While loop the j
          * while j is bigger than 0 and j(index 1) is smaller than j-1,
          * Run the function swap to swap the index i and index i-1
          */

         while(j>0 && arr[j]<arr[j-1]){
            swap(j,j-1,arr)
            //decrement the j by -1
            j-=1
         }
     }
     return arr
 }

 function swap (i,j,arr){
     const temp = arr[j]
     arr[j]= arr[i]
     arr[i]= temp
 }


 console.log(inserstionSort([8,5,2,9,5,6,3]));
 
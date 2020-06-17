function sumRange(num){
  if(num ===1) return 1;
  return num + sumRange(num-1);

}

// sumRange(4)
//         4 + sumRange(3)
//                  3   +   sumRange(2)
//                              2+    sumRange(1) // Then it stops


console.log(sumRange(4))// 10 
console.log(sumRange(10))//55
console.log(sumRange(6));//21




/**
 * 1. check if the num is 1
 * 2. if not, num + call sumRange(num -1)
 * 3 IT re-calls sumRange and continues until sumRange(1) which will return 1
 * 
 * Then we sum all the sumRange and return the answer
 */
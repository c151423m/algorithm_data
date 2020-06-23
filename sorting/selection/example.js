// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr) {
  // for [i] is for the first value
  for (var i = 0; i < arr.length; i++) {
    //assign the value i to  lowest variable
    var lowest = i;
    // j loop will be the second value after i
    for (var j = i + 1; j < arr.length; j++) {
      // check if the second value (j) is lower than than lowest
      if (arr[j] < arr[lowest]) {
        // if yes , reassign lowest to j
        lowest = j;
      }
    }
    // check if i is not lowest value, meaning j is lowest
    if (i !== lowest) {
      //make temp var and put arr[i], which is not lowest value
      var temp = arr[i];
      //assign lowest to i, which makes i position as lowest
      arr[i] = arr[lowest];
      // assign temp to lowest which makes lowest as not lowest Value
      arr[lowest] = temp;
    }
  }
  return arr;
}

// ES2015 VERSION
// MEH readability :/
function selectionSort1(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);

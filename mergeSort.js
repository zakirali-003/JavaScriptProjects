const arr = [4, 2, 1, 6, 7];
console.log(sort(arr));
// Merge sort
function sort(arr) {
  let low = 0; // left start index
  let high = arr.length - 1; // last index of arr
  return mergeSort(arr, low, high);
}
function mergeSort(arr, low, high) {
  if (low >= high) return [arr[low]]; // agar ek hi element ho array ma to yain ruk jae or rretun ho value w k recusrion to nahi hona iss ne

  let mid = Math.floor((low + high) / 2); // Math.floor is used to aviod decimal points.
  let leftArray = mergeSort(arr, low, mid);
  let rightArray = mergeSort(arr, mid + 1, high);
  return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
  const newArray = [];
  let leftindex = 0;
  let rightindex = 0;
  while (leftindex < leftArray.length && rightindex < rightArray.length) {
    if (leftArray[leftindex] < rightArray[rightindex]) {
      newArray.push(leftArray[leftindex]);
      leftindex++;
    } else {
      newArray.push(rightArray[rightindex]);
      rightindex++;
    }
  }
  for (let i = leftindex; i < leftArray.length; i++) {
    newArray.push(leftArray[i]);
  }
  for (let i = rightindex; i < rightArray.length; i++) {
    newArray.push(rightArray[i]);
  }
  return newArray;
}

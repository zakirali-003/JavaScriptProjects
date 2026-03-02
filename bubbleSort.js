/*Concept of Bubble sort
🔸 Compares adjacent elements
🔸 Swaps if they are in wrong order
🔸 Largest element moves to the end in each pass
*/
// NOTE: BUBBLE SORT TIME COMPLEXITY IS n^2
//Practical
let arr = [23, 10, 20, 13, 19, 9, 1];
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // yahan sawap logic hai
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));

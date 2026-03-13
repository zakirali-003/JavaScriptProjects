/* Spread Operator  denoted by (...)
The spread operator allows you to expand an array or object into individual elements or properties.
Key Uses:
1. Copy arrays/objects → [...arr], {...obj}
2. Merge arrays/objects → [...arr1, ...arr2], {...obj1, ...obj2}
3. Pass array elements as function arguments → func(...arr)
4. Insert items in arrays easily → [newItem, ...arr, lastItem]
5. Destructure with rest → [first, ...rest] = arr
6. React usage → setState([...state, newItem]) or <Component {...props} /> */

//1. Copy Arrays Easily
let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1];
console.log(arr2);

//2. Merge Arrays
let info = ['Zakir'];
let contact = [3443003];
let merge = [...info, ...contact];
console.log(merge);

//3. Copy / Merge Objects
let obj1 = { Name: 'Zakir' };
let obj2 = { Contact: '034434343' };
let mergeObj = { ...obj1, ...obj2 };
console.log(mergeObj);

//4. Pass Array Elements as Function Arguments
let numbers = [1, 2, 3];
function sum(a, b, c) {
  console.log(a + b + c);
}
sum(...numbers);

//5. Add / Insert Items in Arrays Easily
let num = [1, 2];
let newArr = [...num, 3];
console.log(newArr);

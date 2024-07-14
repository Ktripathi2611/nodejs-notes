// *Task:* Create a function to find the intersection of two arrays.

// *Example Usage:*
// javascript
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// console.log(intersection(array1, array2)); // Output: [3, 4]

function intersection(array1, array2) {
    return array1.filter(value => array2.includes(value));//check the value of array of one element is present in another
}


const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log(intersection(array1, array2)); // Output: [3, 4]

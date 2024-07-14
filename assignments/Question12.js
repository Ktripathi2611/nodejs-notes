// #### Question 2
// *Task:* Create a function that returns the second largest element in an array.

// *Example Usage:*
// javascript
// const arr = [3, 1, 4, 2, 5];
// console.log(secondLargest(arr)); // Output: 4


function secondLargest(arr) {
    arr.sort((a, b) => b - a);//arrry is sorted into decending order only for 2 index  to get 2nd highest number 
    return arr[1];
}

// Example usage:
const arr = [3, 1, 4, 2, 5];
console.log(secondLargest(arr)); // Output: 4

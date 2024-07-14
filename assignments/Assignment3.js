// #### Question 1
// *Task:* Write a JavaScript function that takes an array of strings and returns a new array with each string capitalized.

function CapStrg(arr) {
    return arr.map(str => str.charAt(0) .toUpperCase()+ str.slice(1));
}
//charAt() returns the value of index passed as parameter
//charAt(0).toUpperCase() is use to convert only the first letter of the sqeunce to captital
// str.slice(1) is displaying the string after slicing the Index "0"
const words = ["apple", "banana", "cherry"];
console.log(CapStrg(words)); 


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



// #### Question 3
// *Task:* Write a JavaScript function that takes an array of objects and a key, and returns an array of values corresponding to that key.

// *Example Usage:*
// javascript
// const objects = [{name: "John", age: 25}, {name: "Jane", age: 30}, {name: "Jim", age: 20}];
// const key = "name";
// console.log(getValuesByKey(objects, key)); // Output: ["John", "Jane", "Jim"]



function getValuesByKey(objects, key) {
    return objects.map(obj => obj[key]);
}


const people = [
    { name: "Kushal",
         age: 19 },
    { name: "spidermon",
         age: 30 },
    { name: "BENchacha",
         age: -199 }
];
const nameValues = getValuesByKey(people, "name");
console.log(nameValues); 



// #### Question 4
// *Task:* Calculate the factorial of every element in an array and store it in a new array.

// *Example Usage:*
// javascript
// const numbers = [1, 2, 3, 4];
// console.log(factorialArray(numbers)); // Output: [1, 2, 6, 24]



function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  function factorialArray(numbers) {
    return numbers.map(number => factorial(number));
  }
  
  const numbers = [1, 4, 6, 10];
  console.log(factorialArray(numbers));     
  

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

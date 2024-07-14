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

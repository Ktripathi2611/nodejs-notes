
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

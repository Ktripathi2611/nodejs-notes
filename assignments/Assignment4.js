// question1 
function key(obj) 
{
    return Object.entries(obj);
}
const person =
 {
     name: "adi chacha  ", 
    age: 342,
};
console.log(key(person)); 




// Question2

const string = "hello world";


const capitalizedString = string.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

console.log(capitalizedString); // Output: Hello World



// question3
function isEmpty(obj)
{
 return Object.keys(obj).length === 0;//it will check the if the obj is empty and return boolean value true if empty or false when it has properties
}
  
  const emptyObject = {};//  intialized Empty object here 
  console.log(isEmpty(emptyObject));
  
  const obj = { name: "Alice", age: 30 }; // intialized Object with properties
  console.log(isEmpty(obj));        // Output: false (fixed typo)
  
  
//   Question4
const charCount = str => str.split('').reduce((acc, char) =>
     {
    char = char.toLowerCase(); // Optional for case-insensitive counting
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  
  console.log(charCount("hello my name is kushal tripathi ")); // Output: { h: 1, e: 1, l: 2, o: 1 }
  
// Question 1: Multiplication Table Generator
// ● Task: Write a JavaScript program that generates a multiplication table for
// numbers from 1 to 10. The program should use nested loops to create a
// table in the console output.
// ● Requirements:
// ○ Use a nested for loop.
// ○ Format the output so each row shows the multiplication results for a
// number from 1 to 10.

for(let i=1;i<=10;i++){    // here loop is designed to continue till count of 10 
    console.log('\n the table of ',i,':\n');
    for(let j=1;j<=10;j++){     //it will repeat the loop based on the above loop and then  repeat till outter loop is completed
        console.log(i,' multipled by  ',j,' is equal to ',i*j)
    }
}







// Example array (you can replace this with your own)
const numbers = [5, 10, 30,15, 20, 25];//intialized the array  of variable 

let sum = 0;//intial value of the sum is zero 
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
console.log(`Sum of array elements: `,sum);





// Question 3: Palindrome Checker
// ● Task: Write a JavaScript function that checks whether a given string is a
// palindrome (reads the same forward and backward).
// ● Palindrome Example:
// ○ String: LEVEL
// ○ Reversing the above string: LEVEL
// ○ As the String and its reverse are the same that means “Level” is
// a palindrome.
// ● Requirements:
// ○ The function should take a string as an argument.
// ○ Return true if the string is a palindrome, otherwise return false.
function isPalindrome(str) {
    // Checking the Reflection:
    for (let i = 0; i < str.length / 2; i++) {//It iterates through the first half of str.
      if (str[i] !== str[str.length - 1 - i]) {//n each iteration, it compares a character at index i with its corresponding character on the other side (str.length - 1 - i).
        return false;
      }
    }
    
    return true;
  }
  
  const is_palindrome = isPalindrome("121"); // Replace "121" with your string
  
  console.log(is_palindrome); // This will print true or false
  






  // Question 4: Fibonacci Sequence Generator
// ● Task: Write a JavaScript function that generates the first n numbers of the
// Fibonacci sequence.
// ● Fibonacci Sequence: 0 1 1 2 3 5 8 13 21 34 . . .
// ● Requirements:
// ○ The function should take an integer n as an argument.
// ○ Return an array containing the first n Fibonacci numbers.
function fibonacciSeries(n) {
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];//formula to calculate the fabinoci serise
    }
    return fibonacci;
  }
  
  const n = 10; // Change this to generate a different number of Fibonacci numbers
  console.log(`First ${n} Fibonacci numbers: `, fibonacciSeries(n));
  





  function checkScope() {
    if (true) {
      var fullName = "kushal tripathi ";
      let age = 30;
      const bike = "1250gsa";
    }
  
    console.log("fullName:", fullName); 
    console.log("age:", age); 
    console.log("bike :", bike); 
  }
  
  checkScope();
  
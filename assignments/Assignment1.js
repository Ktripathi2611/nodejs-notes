                                // Question 1: Data Types and Variables
// Problem: Write a program that defines and logs different data types. The program should:
// Declare a variable of each of the following data types: string, number, boolean, object, and array.
// Assign appropriate values to each variable.
// Log the value and type of each variable to the console.

// Variable Declarations:
let  String = " hlo guys welcom to  string  ";
console.log(" what  i have stored in  string  is ",String);
// In JavaScript, the `let` keyword is used to declare variables,
// and you've already created a variable named `String` to store your custom string value.
// to display the mssg/output on screen  
// console.log () is use  

// Variable Declarations:
const pie = 3.142;
// Variables defined with const cannot be reassigned 
// to a new value after their initial assignment.
console.log(" the value of pie is ", pie);

// Variable Declarations:
let m = true;
let n = false;
// let m = true; declares a variable m and assigns it the value true.
// let n = false; declares another variable n and assigns it the value false.
let andResult = m && n 
console.log(andResult)
// Logical AND (&&) Operation:
// let andResult = m && n; computes the logical AND of m and n.
// The result of m && n is false because both m and n must be true for the entire expression to evaluate to true.
// Therefore, andResult will be false.
let orResult = m || n
console.log(orResult)
// Logical OR (||) Operation:
// let orResult = m || n; computes the logical OR of m and n.
// The result of m || n is true because at least one of m or n needs to be true 
// for the entire expression to evaluate to true.
// Since m is true, orResult will be true.
let notResult = !m 
console.log(notResult)
// Logical NOT (!) Operation:
// let notResult = !m; computes the logical NOT of m.
// The result of !m is false because it negates the value of m.
// Since m is true, notResult will be false.

//  Object Definition:
 const bike={// We create an object called bike.
     b_name :"ducati daveil",
     // b_name: Represents the bike’s name, set to “Ducati Diavel.”
     enginne : "1200 cc  v4"// engine: Describes the engine size, specified as “1200 cc V4.”
      ,color  : "Mordant red 19"// color: Indicates the bike’s color, which is “Mordant Red 19.”
 }
 console.log(bike.b_name)
 console.log(bike.color)
 console.log(bike.enginne)

// Displaying Information:
// We use console.log() to print the following details:
// Bike name: “Ducati Diavel”
// Color: “Mordant Red 19”
// Engine: “1200 cc V4”


// Array Definitions:// We have three arrays:
let arr =[1,2,3,4];// arr: Contains the numbers 1, 2, 3, and 4.
let arr1 =[1,2,"cherry ",3,4];// arr1: Includes a mix of numbers and the string “cherry.”
let fruits = ["Apple","Mango", "Pineapple"];// fruits: Holds the names of different fruits (“Apple,” “Mango,” and “Pineapple”).
console.log(arr1)
console.log(arr[1])
console.log(fruits);
console.log(fruits[0])
// Console Output:
// console.log(arr1); prints [1, 2, "cherry", 3, 4].
// console.log(arr[1]); displays the value 2.
// console.log(fruits); shows ["Apple", "Mango", "Pineapple"].
// console.log(fruits[0]); outputs "Apple".





                         // Question 2: Operators and Expressions


// Problem: Write a program that performs basic arithmetic operations. The program should:
// Prompt the user to enter two numbers.
// Perform addition, subtraction, multiplication, and division on the two numbers.
// Display the results of each operation




//arithmetic Operators
console.log("Arithmetic Opertors")
 x = parseInt(prompt("Enter the first integer:"));//prompt funnction is use to take user input 
 y = parseInt(prompt("Enter the second integer:"));
let sum = x+y // here the sum of x  and y  inputs taken from user is stored in  sum
console.log("the sum of two integer is ",sum)
let difference = x-y// here the differnce  of x  and y  inputs taken from user is stored in  differnce 
console.log(" the deffernce between two integer is  ",difference)
let product = x*y// here the product  of x  and y  inputs taken from user is stored in  product 
console.log(" the product of  two integer is",product)
let division = x/y// here the division  of x  and y  inputs taken from user is stored in  division
console.log (" the  result of the division is :" ,division) 








                              // Question 3: Conditional Statements


// Problem: Create a program that checks if a number is positive, negative, or zero. The program should:
// Prompt the user to enter a number.
// Use a conditional statement to check if the number is positive, negative, or zero.
// Display an appropriate message based on the result.
const number = parseInt(prompt("enter intger here "));// input from the user  is stored in  user define varible 
// to check  if the user input number is positive  compare it with the user input   
// if it is greater than zero(number >0) then it is positive number
if (number > 0) {
    console.log("The number is positive");
}// if it is equals to  zero(number ===0) then it is zero 
else if (number === 0) {
    console.log("The number is zero");
}
else if (number <0){
    console.log("The number is negtive ")
}
else{
    console.log("Plz input the valid integer ")
}





                                 // Question 4: Control Flow Keywords


// Problem: Write a program that prints all even numbers from 1 to 20. The program should:
// Use a loop to iterate through the numbers from 1 to 20.
// Use a control flow keyword (e.g., continue) to skip odd numbers.
// Log each even number to the console.
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i); 
// }
let num1 = 1;//num1  is initialised with value as 1 
while (num1 <= 20) {// the loop will continue  until, it reacheeas
    if (num1 % 2 === 0) {
        console.log(num1);
    }
    num1++;
}
 



                                // Question 5: Combining Concepts
                                
// Problem: Create a program that simulates a simple grading system. The program should:
// Prompt the user to enter a numeric grade (0-100).
// Use conditional statements to determine the letter grade based on the numeric grade:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// 0-59: F
// Display the letter grade to the user.
let grade = parseInt(prompt("Enter the grade :"));//grade is use to take the input from the user 
if (grade >= 90 && grade <= 100) {// if the grade is range from 90 -100 
    console.log("Your grade is A");// it will print the grade as A
} else if (grade >= 80 && grade < 90) {// if the grade is range from 80 -89 
    console.log("Your grade is B");// it will print the grade as B
} else if (grade >= 70 && grade < 80) {// if the grade is range from 70 -79 
    console.log("Your grade is C");// it will print the grade as C
} else if (grade >= 60 && grade < 70) {// if the grade is range from 60 -69 
    console.log("Your grade is D");// it will print the grade as D
} else if (grade >= 0 && grade < 60) {// if the grade is range from 0 -59 
    console.log("Your grade is F");// it will print the grade as F
} else {
    console.log("Enter a valid input grade");//incase of some abnormality  it display the mssg 
}

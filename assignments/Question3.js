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
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
let grade = parseInt(prompt("Enter the grade :"));
if (grade >= 90 && grade <= 100) {
    console.log("Your grade is A");
} else if (grade >= 80 && grade < 90) {
    console.log("Your grade is B");
} else if (grade >= 70 && grade < 80) {
    console.log("Your grade is C");
} else if (grade >= 60 && grade < 70) {
    console.log("Your grade is D");
} else if (grade >= 0 && grade < 60) {
    console.log("Your grade is F");
} else {
    console.log("Enter a valid input grade");
}

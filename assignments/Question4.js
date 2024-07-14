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

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
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
  }
  
  const n = 10; // Change this to generate a different number of Fibonacci numbers
  console.log(`First ${n} Fibonacci numbers: `, fibonacciSeries(n));
  
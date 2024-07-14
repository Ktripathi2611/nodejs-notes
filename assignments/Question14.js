
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
  
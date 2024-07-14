// Example array (you can replace this with your own)
const numbers = [5, 10, 30,15, 20, 25];//intialized the array  of variable 

let sum = 0;//intial value of the sum is zero 
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
console.log(`Sum of array elements: `,sum);

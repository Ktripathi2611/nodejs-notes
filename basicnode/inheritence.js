
// function greet(name) {
//     return `hello, ${name}!`;
// }


// console.log(greet("kushal"));


// const App = (name) => {
//     return `hello ${name}`;
// };


// console.log(App("kushal"));


// function checkVotingEligibility(age) {
//     if (age >= 18) {
//       return "Eligible to vote";
//     } else {
//       return "Not eligible to vote";
//     }
//   }
//   const age = 20;
  
  
// function calculateSimpleInterest(principal, rate, time) {
//     // Formula for simple interest: SI = (P * R * T) / 100
//     const simpleInterest = (principal * rate * time) / 100;
//     return simpleInterest;
// }


// const principalAmount = 50000; // Principal amount in dollars
// const interestRate = 3; // Interest rate in percentage
// const timePeriodInYears = 3; // Time period in years

// const interest = calculateSimpleInterest(principalAmount, interestRate, timePeriodInYears);
// console.log(`Total interest you have to pay: $${interest.toFixed(2)}`);


let globalvar = "I am global";

function accessGlobal() {
    console.log(globalvar);
}

accessGlobal(); // Output: I am global
console.log(globalvar);

function myfunction(){
    let function= " i am local ";
     console.log (functionvar)
     
}
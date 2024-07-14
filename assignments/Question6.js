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
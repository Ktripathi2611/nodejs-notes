// for (var i=0; i<=10; i++){
//     console.log(i);
    
// }

// for (var i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// for (var i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// for (var i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// for (var i = 1; i <= 30; i*3) {
   
//         console.log(i);
//     }


// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0) {
//       console.log(i);
//     }
//   }



// let string =" ";
// for(let a=1; a<5; a++){
//     for (let b=0; b<a; b++){
//         string+="*";

//     }
//     string +="\n";
// }
// console.log(string)


// let string ="";
// for(let a=5; a>1; a--){
//     for (let b=0; b<a; b++){
//         string+="*";

//     }
//     string +="\n";
// }
// console.log(string)




// let string ="";
// for(let a=1; a<4; a++){
//     for (let b=0; b<a; b++){
//         string+="*";

//     }
//     string +="\n";
// }
// console.log(string)


// let rows = 4;
// let variable = 1;
// let pattern = "";

// for (let e = 1; e <= rows; e++) {
//     for (let f = 1; f <= e; f++) {
//         pattern += variable;
//         variable++;
//     }
//     pattern += "\n";
// }

// console.log(pattern);

// let rows = 4;
// let variable = 1;
// let pattern = "";

// for (let e = 1; e <= rows; e++) {
//     for (let f = 1; f <= e; f++) {
//         pattern += variable;
//         variable++;
//     }
//     pattern += "\n";
// }

// console.log(pattern);

//  let rows = 4;
// let variable = 1;
// let pattern = "";
// for (let i=1; i<=n;i++){
//     for (let j=0;j<1;j++){
//         pattern+= String.fromCharCode(j+65)+"";
//     }
//     pattern+='\n';

//  }
//  console.log(parent);

// let row = 3;
// let pattern = "";

// for (let i = 1; i <= row; i++) {
//   for (let j = 0; j < row; j++) {
//     pattern += i;
//   }
//   pattern += '\n';
// }

// console.log(pattern);

// let row = 3;
// let pattern = "";
// let char = 'a';  // Start with character 'a'

// for (let i = 1; i <= row; i++) {
//   for (let j = 0; j < row; j++) {
//     pattern += char;
//     char = String.fromCharCode(char.charCodeAt(0) + 1); // Increment character code for next letter
//   }
//   pattern += '\n';
//   char = 'a';  // Reset character for the next row
// }

// console.log(pattern);

// let a = 3;
// let p = '';

// for (let i = 0; i < a; i++) {
//     for (let j = 0; j < a; j++) {
//         p += String.fromCharCode(i + 66); // Use (i + 66) to get 'B', 'C', ...
//     }
//     p += '\n'; // Add a newline character after each row
// }

// console.log(p);




const arry = [1, 2, 3, 4, 5];
for (let value of arry) {
    console.log(value);
}


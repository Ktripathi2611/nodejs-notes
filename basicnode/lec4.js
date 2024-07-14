// let arrayName = [1,2,3,4];
// console.log(typeof(arrayName));
// console.log(arrayName);

// console.log(arrayName[2]);

// const arrofObj = [
//     samsung ={
//     model : "f9 pro",
//     price : 20000,
//     },
//     onePlus = {
//         model : "2T",
//         price : 25000,

//     },
//     vivo = {
//         model : "y23",
//         price : 15000,

//     },
//     oppo = {
//         model : "a34",
//         price : 30000,

//     }
// ];

// console.log(arrofObj);
// console.log(arrofObj[0].model); 
// console.log(arrofObj[0].price);
// console.log(arrofObj[1].model); 
// console.log(arrofObj[1].price);
// console.log(arrofObj[2].model); 
// console.log(arrofObj[2].price);
// console.log(arrofObj[3].model); 
// console.log(arrofObj[3].price);

// let fruits = ["apple","banana"];
// fruits.push("cherry",1,3.4,"True","kushal","21");
// console.log(fruits);
// console.log(fruits.length);

// fruits.pop();
// console.log(fruits);

// console.log(fruits[3]);
        
// arr = [1,2,3,4,5,6,7,8,9,10];
// if (arr%2===0){
//     arr.pop();
// }

// for (let i = 1;i<=4;i++) {
// arr.pop()
// }
// console.log(arr)

// let arr1 =[];
// for (i = 1;i<=10;i++){
//     arr1.push(i);
// }
// console.log(arr1);

// let arr1 =[];
// for (i = 1;i<=20;i++){
//     if (i%2==0){
//     arr1.push(i);
//     }
// }
// console.log(arr1);

// let arr1 =[];
// for (i = 1;i<=20;i++){
//     if (arr1%i==0){
//     arr1.push(i);
//     }
// }
// console.log(arr1);


// for (let i = 2; i <= 100; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(i);
//     }
//   }
  
// let a = ["apple","banana"]
// let b = ["cherry","mango"]
// let allFruit = a.concat(b);
// console.log(allFruit);  

// let a = [2,1,5,3,4]
// console.log(a.sort());

// let eve = [8,2,4,6];
// let  od  = [3,5,9,7,1];
// let evenOdd = eve.concat(od);
// console.log(evenOdd);
// console.log(evenOdd.sort());

// let fruit = ["apple","Banana","Mango","Cherry"];
// let citrus = fruit.slice(1,3);
// let cirtus1 = fruit.slice(1);
// console.log(cirtus1);

// let watch = ["apple","samsung","firebolte","fossil"];
// watch.forEach(function(watch){
//     console.log(watch);
// });

// let num = [1,2,3];
// let num1 = num.map(function(number){
// return number * 2;
// });
// console.log(num1);

// let a = [1,4,9,16,25];
// const sqroot = a.map(num => Math.sqrt(num));
// console.log(sqroot);

// let strings = ["10","20","30"];
// const a = strings.map(str =>parseInt(str))
// console.log(a)

// let num1 = [1,2,3,4,5];
// let evennum = num1.filter(function(number){
//     return number%2 === 0;
// })

// console.log(evennum);

// let fruit = ["Apple","banana","cherry"];
// let fruit1 = fruit.join("-");
// console.log(fruit1);

// let pn = [2,3,5,7];
// let pnc = pn.join(",");
// console.log(pnc);

let number = [1,2,3,4];
let num = number.reduce(function(accumulator,currentValue){
    return accumulator * currentValue;

},1);
console.log(num);
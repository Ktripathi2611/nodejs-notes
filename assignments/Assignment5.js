// Question 1
// ● Task: Write a function that returns a closure which adds a specific number to its argument.

function toAdd(number) {
    return function (num1) {  //This function returns another function (a closure).
        return num1 + number
    }
}
const addnum = toAdd(13)//call toAdd(13), it returns a new function that takes an argument num1.
console.log(addnum(1200));//call addnum(1200), it adds 13 to 1200, resulting in the output 1213



// Question 2
// ● Task: Create a function using closure to keep track of how many times it has been called.

function CreateCounter() {
    let count = 0
    return function () {
        count++
        return count

    }
}
const incrementCounter = CreateCounter()
console.log(incrementCounter())
console.log(incrementCounter())
console.log(incrementCounter())
console.log(incrementCounter())
console.log(incrementCounter())

// Question 3
// ● Task: Implement a prototype method to calculate the area of a rectangle object.
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
  }
  

  Rectangle.prototype.area = function() {
    return this.width * this.height;
  };
  
  // Create a new rectangle object
  const rect = new Rectangle(5, 3);
  
  // Call the area method on the rectangle object
  const area = rect.area();
  
  console.log("Area of the rectangle:", area); 


//   Question 4
// ● Task: Write a function to create an object and add methods using prototype to calculate perimeter and area of a circle.
function Circle(radius) {
    this.radius = radius;
  }
  
  Circle.prototype.calculateArea = function() {
    return Math.PI * this.radius * this.radius;
  };
  
  Circle.prototype.calculatePerimeter = function() {
    return 2 * Math.PI * this.radius;
  };
  
  const circle1 = new Circle(10);
  const area_C = circle1.calculateArea();
  const perimeter = circle1.calculatePerimeter();
  
  console.log("Area of circle:", area_C);
  console.log("Perimeter of circle:", perimeter);
  

//   Question 5
// Task
// Create a function that returns a set of functions that can increment, decrement, reset, and get the value of a private counter. Each function should be able to modify or access the private counter, demonstrating a more complex use of closures.


function createCounter(initialValue = 0) {
    let count = initialValue;
  
    function increment(step = 1) {
      count += step;
      return count;
    }
  
    function decrement(step = 1) {
      count -= step;
      if (count < 0) {
        count = 0;
      }
      return count;
    }
  
    function reset() {
      count = initialValue;
      return count;
    }
  
    function getValue() {
      return count;
    }
  
    return {
      increment,
      decrement,
      reset,
      getValue,
    };
  }
  
  
  const myCounter = createCounter(5);
  
  console.log(myCounter.getValue()); 
  
  console.log(myCounter.increment(3)); 
  
  console.log(myCounter.decrement(2)); 
  
  console.log(myCounter.reset()); 
  
var Function;

//this is a procedure as a function, which will take a input and give a output

// function square(number) {
//     var multiply = number * number;
//     console.log(multiply);
// }

var calling_function;
//if we define a function it's not enough to execute it. Definition of function name, specify what it will do when we call it.
//function must be in scope when we call it. function declaration can be hoisted.

var anonymousFunction;

// function square(number) {
//     console.log(number*number); 
// }
// var ans = square(5); // ans gets the value 25

var functionExpression;

// var abc = function (p1, p2) {
//     console.log(p1+p2)
// }
// abc(3, 3); //this abc gives value 6

// let a = 2;
// let b = 'hello';

// console.log(a += 3); // addition
// // expected output: 5

// console.log(b += ' world'); // concatenation
// // expected output: "hello world"

//The following example shows a map function that should receive a function as first argument and an array as second argument.
// function map(f, a) {
// let result = []; // Create a new Array
// let i; // Declare variable
// for (i = 0; i != a.length; i++)
//       result[i] = f(a[i]);
//     return result;
// }
// const f = function(x) {
//      return x * x * x;
// }
// let numbers = [0, 1, 2, 5, 10];
// let cube = map(f,numbers);
// console.log(cube);

var arrowFunction;
// var x = () => {
//     console.log("Hello")
// }
// x();


// const materials = ['Hydrogen', 'Helium', 'Lithium','Beryllium'];

//     var output1 = materials.map(function(sizeWord) { 
//         return sizeWord.length; 
//     }); //Traditional Anonymous Function
//     console.log(output1); // expected output: Array [8, 6, 7, 9]

//     console.log(materials.map(sizeWord => sizeWord.length));                     
//     // expected output: Array [8, 6, 7, 9]
  
//   //Arrow Function- materials => sizeWord.length vs function(sizeWord) { return sizeWord.length; }

var Object_in_Function;

// const myWatch = {
//     brand: 'Rado',
//     model: 'R32033902',
//     color: 'white'
//   };

// function showProps(obj ,objName) {
//     let result = '';
//     for (let i in obj) {
//       // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
//       if (obj.hasOwnProperty(i)) {
//         result += `${objName}.${i} = ${obj[i]}\n`;
//       }
//     }
//     console.log(result);
//   }

// showProps(myWatch,'myWatch');

var function_calling_function;

// function factorial(n) {
//     if ((n === 0) || (n === 1))
//       return 1;
//     else
//       return (n * factorial(n - 1));
//   }

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//   }
  
//   function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
//   }
  
//   console.log(new Food('cheese', 5).name);
//   // expected output: "cheese"

var NestedFunction;
//You may nest a function within another function. 
//The nested (inner) function is private to its containing (outer) function.

// function addSquares(a, b) {
//     function square(x) {
//       return x * x;
//     }
//     return square(a) + square(b);
//   }
//   a = addSquares(2, 3); // returns 13
//   console.log(a);
//   b = addSquares(3, 4); // returns 25
//   console.log(b);
//   c = addSquares(4, 5); // returns 41
//   console.log(c);

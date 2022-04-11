
// var n=2;
// function square (num) {
//     var ans = num*num;
//     return ans;
// }
// var square2 = square(n);
// var square4 = square(4);

var functionExpression
// var abc = function (p1, p2) {
//     console.log(p1+p2)
// }
// abc(3, 3)

var arrowFunction
// var x = () => {
//     console.log("Hello")
// }
// x()

var Callback

// var greet = (a, b) => {
//     console.log("How are you?")

//     let abc = a+b
//     console.log("add", abc)
// }
 
// var sayHi = (callback) => {
//     console.log("Hi")
//     let a = 2;
//     let b = 4;
//     setTimeout(() => {
//         console.log("Hello")
//         callback(a, b);
//     }, 1000)
// }
// sayHi(greet)

var Promise
// const xyz = () => {
//     return new Promise((resolve, reject) => {
//         let flag = true;
//         if (!flag){
//             resolve("promise resolve");
//         } else{
//             reject("promise rejected");
//             }
//     })
// }
// var abc = () => {
//     let a = 2;
//     let b = 2;
//     let ab = a+b;
//     console.log("addition", ab)
//     return ab;
// }

// xyz().then(value => console.log("after resolve--->", value))
//     .catch(error => console.log("after rejected--->", error));

var asyncAwait
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("resolved");
//         }, 2000);
//     });
// }
// async function asyncCall() {
//     console.log("calling");
//     const result = await resolveAfter2Seconds();
//     console.log("result---> ", result);
//     console.log("after resolve");
// }
// asyncCall();


var simpleFunction
// var a = 5;
// function getName() {
//     console.log("Rashmi");
// }
// getName();
// console.log(a);

var defaultFunctionParameter
// function multiply(a, b=2) {
//     return a*b;
// }
// console.log(multiply(5));

var templateLiterals
// let firstName = "Rashmi"
// let lastName = "Gajra"
// console.log(`My name is ${firstName} ${lastName}`)

var multiLine
// let data = `I am Rashmi Gajra
//             I live in Sri Ganganagar
//             This is my Custom fellowship Program`
// console.log(data)

var spreadOperator
// var array1 = [ 0, 1, 2 ]
// var array2 = [ 3, 4, 5 ]
// var array3 = [...array1, ...array2]
// console.log(array3)
// var array4 = array1.concat(array2)
// console.log(array4)

var clonedObject
var mergeObject
// var obj1 = {
//     value : 'bar',
//     x : 42
// };
// var obj2 = {
//     value : 'baz',
//     y : 67
// };
// var clonedObj = {...obj2}
// console.log(clonedObj)

// var mergeObj = {...obj1, ...obj2}
// console.log(mergeObj)

var destructing
// let arr = [10,20]
// let [a,b] = arr
// console.log(a)
// console.log(b)

// let [a, b, ...rest] = [10, 20, 30, 40, 50]
// console.log(a)
// console.log(b)
// console.log(rest)

var obj
// ({a, b, ...rest} = {a:10, b:20, c:30, d:40});
// console.log(a)
// console.log(b)
// console.log(rest)

// const user = {
//     number : 5,
//     isVerified : true
// };
// const {number, isVerified} = user;
// console.log(number);
// console.log(isVerified);

let modules;
// export var userID = 10;
// export function getName(name) {

// };
// import { Console } from 'console';
// import { userID, getName } from 'module';
// console.log(userID);

var stringIncludes;
// let text = "Hello world";
// if( text.includes("world") ) {
//     console.log("yes");
// } else{
//     console.log("No");
// }

var indexOperator
// console.log(2 ** 10);
// console.log(Math.pow(2, 10));

var objKey;
// var obj = {
//     foo : 'bar',
//     baz : 42
// };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

var arrayOperation

// let colors = ['white', 'green', 'yellow']
// console.log(colors.length);

// let first = colors[1]
// console.log(first);
// let last = colors[colors.length - 1]
// console.log(last);

// colors.forEach(function (data, i) {
//     console.log(data, i);
// })

// colors.push('red')
// console.log("added", colors);

// let last = colors.pop()
// console.log("removed", colors);

// let first = colors.shift()
// console.log("delete", colors);

// let newLength = colors.unshift('white')
// console.log("added", colors);

// let pos = colors.indexOf('white')
// console.log("index", pos);
// console.log(colors);

// colors.splice(1, 2);
// console.log(colors);

// colors.splice(1, 1, 'blue');
// console.log(colors);

// let text = "hello Rashmi"
// let afterSlice = text.slice(0, 7)
// console.log(afterSlice);

// let text = "hello Rashmi"
// let afterSlice = text.split(" ")
// console.log(afterSlice[1]);

// const colors = ['red', 'white']
// // const color1 = ['green']
// // const color2 = ['blue']
// // const newArray = colors.concat(color1, color2)
// // console.log(newArray);

// let afterCov = colors.join(" * ")
// // let afterCov = colors.toString()
// console.log(colors);

var map;

// const cities = ['ny', 'la', 'tx']
// let output = cities.map((city) => city.toUpperCase())
// console.log(output);

// const numbers = [45, 4, 9, 16, 25, 2]
// let output = numbers.map((no) => no * 2);
// console.log(output);
// let filterOutput = numbers.filter((no) => no < 9);
// console.log(filterOutput);
// let output = numbers.reduce((a, v) => a + v);
// console.log(output);

var examples
// const student = {
//     name : 'Ming',
//     age : '18',
//     city : 'Shanghai'  
//   };
   
//   const {name,age,city} = student;
//   console.log(name);
//   console.log(age); 
//   console.log(city);

var ES9
// async function process(array) {
//     for await (let i of array) {
//       doSomething(i);
//     }
//   }

// function foo(str) {
//     return str[0].toUpperCase();
// }

// foo`justjavac`;
// foo`Xyz`;

// var rENames_captured_group
// const date = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
//   match  = reDate.exec('2018-04-30'),
//   year   = match.groups.year,  // 2018
//   month  = match.groups.month, // 04
//   day    = match.groups.day;   // 30
 
// const reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
//   d = '2018-04-30',
//   usDate = d.replace(reDate, '$<month>-$<day>-$<year>');


// var x = 1;
// a();
// b();
// console.log(x);

// function a(){
//   var x = 10;
//   console.log(x);
// }

// function b(){
//   var x = 100;
//   console.log(x);
// }
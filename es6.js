function func1(){
  if(true) {
    let tmp = 123
  }
  //tmp is undefined here when the line "let tmp = 123" is used because let is a block scope variable
  //"let" is good for nested loops
  console.log("func1 tmp", tmp);
}

// func1()

// (function func2(){
//   let foo = 5;
//   if(true) {
//     let foo = 10
//     console.log("foo inside block", foo);
//     //If "let" is not used in this block the "foo = 10" will redefine foo
//     // if "let" is used than foo will only be redefined inside this block
//   }
//   console.log("func2 foo", foo);
// }());
//
// //function func2 is now a self-invocing function and does not need to be called

//
// const MAX_CAT_SIZE = { weight: 3000};
//
// MAX_CAT_SIZE.weight = 5000;
// console.log("MAX_CAT_SIZE", MAX_CAT_SIZE)
// //in this example you can change the value of the variable inside the object of MAX_CAT_SIZE
// // you can also add other variables inside the object like, height = 5 by
// // MAX_CAT_SIZE.height = 5;

// var reflect = function(value) {
//   return value;
// }
//
// const reflect = value => value;
// //the two items above are the same thing


// var numbers = [1,2,3,4,5];
// // var timesTwo = numbers.map(function(number){
// //   return number*2;
// // });
// //
// // console.log(timesTwo);
//
// let timesTwo = numbers.map( (number) => number * 2);
// console.log(timesTwo);
//
// //like before, the two items above with timesTwo are the same


// //Object Literal Property Value shorthand
// const wow = "hi there",
//       es6 = "es6",
//       myNum = () => console.log("howdy");
//
// let myOldObject = {
//   wow: wow,
//   es6: es6,
//   myNum: myNum
// };
//
// let myNewObject = {wow,es6,myNum}
// console.log("myNewObject", myNewObject);
// //Like before, the "new" is a different way to write the "old"
//


// //destructuring
// const dog = {
//   name: "Murph",
//   breed: "Aussie",
//   speak: () => "woof"
// }
//
// const myDog = dog.name;
// //oldway
//
// const { name, speak } = dog;
// console.log("my dog's name", name, "my dog speaks", speak());
// //the destructured way, this declares the variables "name" and "speak", setting their values to "dog.name" and "dog.speak"
// // if you want a different name than what was in the variable, then
// // const { name: myName, speak } = dog;
//
// //you can also use this with arrays
//
// const [a,b] = [5,10];
// console.log("a and b", a,b);
//
// let x = [1,2,3,4,5];
// let [y,z] = x;
// //y will be 1, z will be 2
// let countries = ["Moldova", "Ukraine"];
// let othercountries =["USA", "Japan"];
//
// let meldedCountries = [...countries, ...othercountries]
// console.log("melded", meldedCountries);
// //this is the spread operator.  so you could use this concept with the x array,
// //let [y,z, ...theOthers] = x;
// //console.log("the others", theOthers);
// //will display 3,4,5
// //Also, you don't have to assign a value, just a place
// //let [,,...theOthers] = x;



//A better forEach thing

var arr = ["1","2","3"];

for (let [index, element] of arr) {
  console.log(index);
}

//this lets you write the if statments that let you stop the loop but is short like the forEach loop












//

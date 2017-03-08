#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

const chA = {
  a: "Give me a",
  an: "Give me an"
};
// console.log(chA.a);
// console.log(chA.an);

var JohnDoe = ["J","O","H","N"," ","D","O","E"];

var joedoe = JohnDoe.join("");

// console.log(JohnDoe)


// function cheer(JohnDoe){
  for(let letter of JohnDoe){
    if(letter !== " "){
      if(letter == "J" || letter == "D"){
        console.log(chA.a,letter+"!")
      }else{
        console.log(chA.an,letter+"!")
      }
    }

  }
// };
console.log("What's that spell?", joedoe+"!")
// cheer();


//You can turn strings into an array like this
// const fist = "joe"
// const second = "doe"
// [...fist, ...second]
//this makes an array like ["j","o","e","d","o","e"]


//The following is called a turnarray statement, it's like an if statement.
// it uses the statement infront of the "?" as the tester, then if true it returns "an" and if false it returns "a"
// let conj = "aeioufhlmnrsx".includes(letter.toLowerCase()) ? "an" : "a"

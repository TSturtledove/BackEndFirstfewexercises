//Blocking example

// const {readFileSync} = require("fs");
//
// const fileArg = process.argv[2];
//
// if(fileArg) {  //checks for truthy
//   try {
//     const data = readFileSync(fileArg);
//     process.stdout.write(data.toString())
//   }catch(e){
//     console.log("error", e.stack)//this is immportent for finding errors in the code
//   }
// } else {
//   // return;
//   process.exit();
// }
//
// console.log("synchronous ver.");




//*****************************Async ver.
//non-blocking example

const {readFile} = require("fs");
const fileArg = process.argv[2];

if(fileArg) {  //checks for truthy
  readFile(fileArg, (err, data) => {
    if(err) return console.error(err)
    process.stdout.write(data.toString())
  });
} else {
  // return;
  process.exit();
}

console.log("Asynchronous ver.");

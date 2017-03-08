#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"




//playing around with node

const superb = require('superb');
// this fetches the node module superb, and return to us what it exports
console.log(superb());



// const args = process.argv.slice(2);
// const args = process.argv.filter( (item, index) => index > 1);


// let [,, ...args] = process.argv;


// console.log(args);
//or

// process.stdout.write(`${args.toString()}\n`);



// require()

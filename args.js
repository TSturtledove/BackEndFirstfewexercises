#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

let [,, ...args] = process.argv;
let tots = 0
for(let num of args) {
  tots += parseFloat(num);
};
console.log(tots);

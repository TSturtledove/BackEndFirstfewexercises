#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

console.log("Node.js version",process.version);
console.log("V8 version",process.versions.v8);


// could also write it like, const {versions: {node, v8} } = process,
                          // output = `Node.js version: ${node}\n V8 version: ${v8}`

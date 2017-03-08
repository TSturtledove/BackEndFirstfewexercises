#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

console.log("Hello, World. I was executed without the 'node' command!")

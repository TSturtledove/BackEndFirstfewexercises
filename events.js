#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

const {EventEmitter} = require("events");
const emitter = new EventEmitter();

// Create an event handler

let handler = () => {
  console.log("connection good");

  // fire the data_received event

  emitter.emit("data_received")
}

// bind connection event with handler

emitter.on("connection", handler);

// bind data_received with the function

emitter.on("data_received", ()=>{
  console.log("data_received good");
});

// fire everything!
emitter.emit("connection");
console.log("program end");

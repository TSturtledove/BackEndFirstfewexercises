#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

//bgRed, bgWhite, bgBlue, white
const chalk = require('chalk');
const log = console.log;
// console.log(chalk.blue("yo there"));
// log(chalk.blue.bgRed.bold('Hello world!'));
// log(chalk.white.bgBlue(" * * * * * * * * ")+chalk.bgRed("                                 "));
// log(chalk.white.bgBlue("  * * * * * * *  ")+chalk.bgWhite("                                 "));
// log(chalk.white.bgBlue(" * * * * * * * * ")+chalk.bgRed("                                 "));
// log(chalk.white.bgBlue("  * * * * * * *  ")+chalk.bgWhite("                                 "));
// log(chalk.white.bgBlue(" * * * * * * * * ")+chalk.bgRed("                                 "));
// log(chalk.white.bgBlue("  * * * * * * *  ")+chalk.bgWhite("                                 "));
// log(chalk.white.bgBlue(" * * * * * * * * ")+chalk.bgRed("                                 "));
// log(chalk.bgWhite("                                                  "));
// log(chalk.bgRed("                                                  "));
// log(chalk.bgWhite("                                                  "));
// log(chalk.bgRed("                                                  "));
// log(chalk.bgWhite("                                                  "));
// log(chalk.bgRed("                                                  "));
//
//
// log(chalk.bgWhite("                                               "));
// log(chalk.bgWhite("                                               "));
// log(chalk.bgWhite("                                               "));
// log(chalk.bgWhite("               ")+chalk.red.bgWhite("        0        ")+chalk.bgWhite("               "));
// log(chalk.bgWhite("               ")+chalk.red.bgWhite("      0 0 0      ")+chalk.bgWhite("               "));
// log(chalk.bgWhite("               ")+chalk.red.bgWhite("    0 0 0 0 0    ")+chalk.bgWhite("               "));
// log(chalk.bgWhite("               ")+chalk.red.bgWhite("  0 0 0 0 0 0 0  ")+chalk.bgWhite("               "));
// log(chalk.bgWhite("               ")+chalk.red.bgWhite("    0 0 0 0 0    ")+chalk.bgWhite("               "));
// log(chalk.bgWhite("               ")+chalk.red.bgWhite("      0 0 0      ")+chalk.bgWhite("               "));
// log(chalk.bgWhite("               ")+chalk.red.bgWhite("        0        ")+chalk.bgWhite("               "));
// log(chalk.bgWhite("                                               "));
// log(chalk.bgWhite("                                               "));
// log(chalk.bgWhite("                                               "));
//

//refine it so that you have functions repeating the lines instead of having to write them all by hand

const {white, bgRed, bgWhite, bgBlue} = require("chalk");
const s = require("string-length");//needed for finding the length of a string

const star = white.bgBlue("*"),
      space = bgBlue(" "),
      espace = bgBlue("  "),
      estar = espace + star;


for ( i = 1 ; i < 14 ; i++) {
  let len = 50,
      field = "",//the inital sting for a line from the star field
      num = 7,//the number of stars the program will make for a row
      fieldlen = 0,//this will be used to store the stringLength of a line from the star field
      color;

  if( i % 2 === 0 ) {
    color = bgWhite;
    num = 6;
    field = i < 8 ? space + estar.repeat(num) + space.repeat(4) : "";
  } else {
    color = bgRed;
    field = i < 8 ? estar.repeat(num) + space.repeat(2) : "";
  }

  fieldlen = s(field);// this sets the field length as a number that can be used in math elsewhere
  len -= fieldlen;// sets the length of the stripe based on the field cutting some off

  process.stdout.write(field + printline(len, color) + "\n");//the "\n" serves as a line break

}
// log(estar)

function printline(chars, color) {
  let line = color(" ".repeat(chars));
  return line;
}


//

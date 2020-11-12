const chalk = require('chalk');
const {fullName} = require("./myModule");
const style = require('ansi-styles');
console.log(fullName('corey', 'wilson'));

console.log(style.color.green.open)

const testField = document.getElementById("first")

console.log(chalk.blue(testField))
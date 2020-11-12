const chalk = require('chalk');
const colors = require('colors');
const {fullName} = require("./myModule");
const style = require('ansi-styles');
console.log(fullName('corey', 'wilson'));

console.log(style.color.green.open)

console.log(chalk.blue("hello"))
console.log(chalk.blue.bgRed.bold(fullName('Corey', 'Wilson')))
console.log(colors.rainbow(fullName('Corey', 'Wilson')))
console.log(colors.inverse(fullName('Corey', 'Wilson')))
console.log(colors.green.underline(fullName('Corey', 'Wilson')))
console.log(colors.trap(fullName('Corey', 'Wilson')))
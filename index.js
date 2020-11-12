const chalk = require('chalk');
const {fullName} = require("./myModule");
const style = require('ansi-styles');
console.log(fullName('corey', 'wilson'));

console.log(style.color.green.open)

console.log(chalk.blue("hello"))
console.log(chalk.blue.bgRed.bold(fullName('Corey', 'Wilson')))
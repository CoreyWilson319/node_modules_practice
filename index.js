const chalk = require('chalk');
const colors = require('colors');
const {fullName} = require("./myModule");
const style = require('ansi-styles');
const figlet = require('figlet');

console.log(fullName('corey', 'wilson'));

console.log(style.color.green.open)

console.log(chalk.blue("hello"))
console.log(chalk.blue.bgRed.bold(fullName('Corey', 'Wilson')))
console.log(colors.rainbow(fullName('Corey', 'Wilson')))
console.log(colors.inverse(fullName('Corey', 'Wilson')))
console.log(colors.green.underline(fullName('Corey', 'Wilson')))
console.log(colors.trap(fullName('Corey', 'Wilson')))

figlet('Corey Wilson', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

// https://github.com/CoreyWilson319/node-express NOTES
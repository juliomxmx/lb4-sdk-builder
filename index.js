const lb4 = require('commander');

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('./lib/inquirer');
// const _ = require('lodash');

const models = require('./lib/models');

lb4.command('init')
    .description('Show innitial text')
    .action( async () => {
        clear();
        console.log(chalk.green.bold(figlet.textSync('lb4 SDK', {horizontalLayout: 'full'})));
        console.log(chalk.white.bold(__dirname));
    });

lb4.command('path')
.description('Ask for the relative path to write the sdk files')
.action( async () => {
    clear()
    const directoryPath = await inquirer.askDirectorySDK();
    console.log(directoryPath);
})

lb4.parse(process.argv);

if(!lb4.args.length) {
    lb4.help()
}
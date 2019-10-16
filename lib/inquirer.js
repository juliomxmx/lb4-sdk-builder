const inquirer = require('inquirer');
const models = require('./models');

module.exports = {

    askDirectorySDK: () => {
        const questions = [
            {
                name: 'path',
                type: 'input',
                message: 'Write the relative path to save the SDK files'
            }
        ];
        return inquirer.prompt(questions);
    }

}
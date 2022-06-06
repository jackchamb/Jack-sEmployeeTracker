const dTable = require(console.table);
const connection = require('./connection.js');
const inquirer = require('inquirer');
const validator = require('validator');
const chalk = require('chalk');
const figlet = require('figlet');

connection.connect(function (err) {
    if (err) throw err;
    console.log(chalk.green(figlet.textSync('SQL Server', { horizontalLayout: 'full' })));
    console.log(chalk.green('Connected as id ' + connection.threadId));
    promptUser();
});
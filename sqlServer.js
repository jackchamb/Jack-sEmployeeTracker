const dTable = require(console.table);
const connection = require('./connection.js');
const inquirer = require('inquirer');
const validator = require('validator');
const chalk = require('chalk');
const figlet = require('figlet');

connection.connect(function (err) {
    if (err) throw err;
    console.log(chalk.green.italic('=========================='));
    console.log('');
    console.log(chalk.yellow.bold(figlet.textSync('Employee Tracker',)));
    console.log('');
    console.log(chalk.green.italic('=========================='));
    promptUser();
});
const promptUser = () => {
    inquirer.prompt([
        {
            name:'choices',
            type:'list',
            message:'Please Select one?',
            choices: [
                'View All Employees',
                'View All Employees by Department',
                'view all roles',
                'view all departments',
                'Add Employee',
                'Add Department',
                'Add Role',
                'Update Employee Role',
                'update employee manager',
                'remove employee',
                'remove department',
                'remove role',
                'exit'
            ]
        }     
    ]).then(function (answer) {
        const { choices } = answer;
        if (choices === 'View All Employees') {
            viewAllEmployees();
        }
        if (choices === 'View All Employees by Department') {
            viewAllEmployeesByDepartment();
        }
        if (choices === 'view all roles') {
            viewAllRoles();
        }
        if (choices === 'view all departments') {
            viewAllDepartments();
        }
        if (choices === 'Add Employee') {
            addEmployee();
        }
        if (choices === 'Add Department') {
            addDepartment();
        }
        if (choices === 'Add Role') {
            addRole();
        }
        if (choices === 'Update Employee Role') {
            updateEmployeeRole();
        }
        if (choices === 'update employee manager') {
            updateEmployeeManager();
        }
        if (choices === 'remove employee') {
            removeEmployee();
        }
        if (choices === 'remove department') {
            removeDepartment();
        }
        if (choices === 'remove role') {
            removeRole();
        }
        if (choices === 'exit') {
            connection.end();
        }
    });
};


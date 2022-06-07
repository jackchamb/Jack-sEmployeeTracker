const mysql = require('mysql');
require('dotenv').config();
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'employee'
});
module.exports = connection;
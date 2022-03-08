const express = require('express');
const mysql = require('mysql2');
const consoletable = require('console.table')
const inquirer = require('inquirer')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'password',
    database: 'movies_db'
  },
  console.log(`Connected to the movies_db database.`)
);

function init() {
    inquirer.prompt([
        {
            type: "list",
            name: "init",
            message: "What would you like to do?",
            choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Roles", "View All Departments","Add Department", "Quit"]

        }
    ])
    .then(ans)
}


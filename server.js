const mysql = require('mysql2');
const consoletable = require('console.table')
const inquirer = require('inquirer')


const PORT = process.env.PORT || 3002;
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
    database: 'credentials_db'
  },
  console.log(`Connected to the movies_db database.`)
);

function init() {
    inquirer.prompt([
        {
            type: "list",
            name: "init",
            message: "What would you like to do?",
            choices: ["View All Departments","View All Employees","View All Roles", "Add Employee", "Update Employee Role",  "Add Roles", "Add Department", "Quit"]

        }
    ])
    .then((ans) => {

    })
}


const mysql = require('mysql2');
const cTable = require('console.table')
const inquirer = require('inquirer')


const PORT = process.env.PORT || 3002;


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
            choices: ["View All Departments","View All Employees","View All Roles", "Add Employee", "Update Employee Role",  "Add Role", "Add Department", "Quit"]

        }
    ])
    .then((ans) => {
      switch (ans.init) {
        case "View All Departments":
          viewDepartments();
          break;
        case "View All Roles":
          viewRoles();
          break;
        case "View All Employees":
          viewEmployees();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
      
        default:
          break;
      }
    })
}

function viewDepartments(){
  db.query("SELECT * FROM departments", 
  function(error, res) {
    if(error) throw error;
    console.table(res);
    init();
  })
}

function viewRoles(){
  db.query("SELECT * FROM roles", 
  function(error, res) {
    if(error) throw error;
    console.table(res);
    init();
  })
}

function viewEmployees(){
  db.query("SELECT * FROM employees", 
  function(err, res) {
    if(err) throw err;
    console.table(res);
    init();
  })
}

function addDepartment(){
  inquirer.prompt([
    {
      type: "input",
      name: "newDep",
      message: "Insert Department you want to add."
    }
    
  ])
  .then((ans) => {
    console.log(ans);
    db.query("INSERT INTO departments SET ?", {name: ans.newDep}),
    
      db.query("SELECT * FROM departments", 

        function(err, res) {
          if(err) throw err;
          console.table(res);
          init();
      })
    
  })
}

function addRole(){
inquirer.prompt([
    {
      type: "input",
      name: "newRole",
      message: "Insert Role you want to add."
    }
    
  ])
  .then((ans) => {
    console.log(ans);
    db.query("INSERT INTO roles SET ?", {name: ans.newRole}),
    
      db.query("SELECT * FROM roles", 
      
        function(err, res) {
          if(err) throw err;
          console.table(res);
          init();
      })
    
  })
}

function addEmployee(){
  
}

init();
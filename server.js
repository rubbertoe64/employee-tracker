const mysql = require('mysql2');
const cTable = require('console.table')
const inquirer = require('inquirer')


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

// Init function to start with options
function init() {
    inquirer.prompt([
        {
            type: "list",
            name: "init",
            message: "What would you like to do?",
            choices: ["View All Departments","View All Employees","View All Roles", "Add Employee",  "Add Role", "Add Department", "Quit"]

        }
    ])

    // depending on what you choose, the code will switch to whatever function is needed
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
        case "Quit":
          console.log("Goodbye! Type 'CTRL + C' to exit");
          break;
          
      
        default:
          break;
      }
    })
}
// function to View all Departments
function viewDepartments(){
  db.query("SELECT * FROM departments", 
  function(error, res) {
    if(error) throw error;
    console.table(res);
    init();
  })
}
// Views all Rols
function viewRoles(){
  db.query("SELECT * FROM roles", 
  function(error, res) {
    if(error) throw error;
    console.table(res);
    init();
  })
}
// Views all Employees
function viewEmployees(){
  db.query("SELECT * FROM employees", 
  function(err, res) {
    if(err) throw err;
    console.table(res);
    init();
  })
}
// Adds Departments
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
// Adds Role
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
    db.query("INSERT INTO roles SET ?", {title: ans.newRole}),
    
      db.query("SELECT * FROM roles", 
      
        function(err, res) {
          if(err) throw err;
          console.table(res);
          init();
      })
    
  })
}
// Adds Employee
function addEmployee(){
  inquirer.prompt([
    {
      type: "input",
      name: "newEmpFirstName",
      message: "Insert Employee's First Name"
    },
    {
      type: "input",
      name: "newEmpLastName",
      message: "Insert Employee's Last Name"
    },
    {
      type: "input",
      name: "newRoleId",
      message: "Insert Employee Role ID Number."
    },
    {
      type: "input",
      name: "newManagerId",
      message: "Insert Employee's Manager ID Number"
    },
    
  ])
  .then((ans) => {
    console.log(ans);
    db.query("INSERT INTO employees SET ?", 
    {
      first_name: ans.newEmpFirstName,
      last_name: ans.newEmpLastName,
      roles_id: ans.newRoleId,
      manager_id: ans.newManagerId
    }),
    
      db.query("SELECT * FROM employees", 
      
        function(err, res) {
          if(err) throw err;
          console.table(res);
          init();
      })
  })
}



init();
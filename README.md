# employee-tracker
This is my employee tracker! This is a very simple app that will prompt you for viewing all departments, employees, or roles as well as adding said departments, employees or roles. This app should satisfy all acceptance criteria!

To initiate just type "node server.js" 

Video Using the App:
https://drive.google.com/file/d/1hnqEZnsdug_F1KcCooOqhLqOEUtWEvHh/view

Image of App in the terminal
![employee tracker image](https://user-images.githubusercontent.com/71856810/157337535-76908db0-9b2c-49b0-9a46-58424c5c18e7.PNG)


## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

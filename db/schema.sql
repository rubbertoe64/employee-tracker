DROP DATABASE IF EXISTS credentials_db;
CREATE DATABASE credentials_db;

USE credentials_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY(id)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL(10, 3),
  department_id INT,
  PRIMARY KEY(id)
  FOREIGN KEY (department_id)
  REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (manager_id),
    REFERENCES role(id)
);

SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;

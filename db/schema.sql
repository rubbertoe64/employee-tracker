DROP DATABASE IF EXISTS credentials_db;
CREATE DATABASE credentials_db;

USE credentials_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(8,2),
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INT NOT NULL,
    manager_id INT DEFAULT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;

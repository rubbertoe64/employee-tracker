INSERT INTO departments (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");


INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 80,1),
       ("Salesperson", 60,1),  
       ("Software Engineer", 150000,2),
       ("Finance", 120000,3),
       ("Legal", 200000,4);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Michael", "Scott", 1, 1),
       ("Jim", "Halpert", 2, 1),
       ("Pamela", "Halpert", 3, 2);
       

       
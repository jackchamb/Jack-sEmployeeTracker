USE employeeTracker;
INSERT INTO department (department_name) VALUES ('IT');
("Sales"), ("Legal"), ("Finance"), ("Engineering");

INSERT INTO role (title, salary, department_id) VALUES ('Manager', 100000, 1), 
('Salesperson', 50000, 2), ('Lawyer', 140000, 3), ('Software Engineer', 130000, 4), 
('Accountant', 90000, 5), ('Lead Engineer', 1000000, 1), ('leagal team lead', 1000000, 3),
('Accountant Manager', 190000, 5);

USE employeeTracker;
INSERT INTO employee (first_name, last_name, role_id,) VALUES ('John', 'Doe', 1, NULL), 
('Jane', 'Doe', 2, 1), ('John', 'Smith', 3, 1), ('Jimmy', 'Jonesy', 4, 1), ('Jack', 'Mack', 5, 1), ('Henry', 'Cline', 5, 2, NULL),
('Chris', 'Looker', 2, 2), ('Tim', 'Grimes', 3, 2, NULL)

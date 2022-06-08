DROP DATABASE employeeTracker;
CREATE DATABASE employeeTracker;
USE employeeTracker;

DROP TABLE IF EXISTS department;
CREATE TABLE department(
  id INT autoIncrement, KEY NOT NULL,
  department_name VARCHAR(30) NOT NULL,
);
DROP TABLE IF EXISTS role;
CREATE TABLE role(
  id INT autoIncrement, PRIMARY KEY NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(10),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
  ON DELETE CASCADE
);
DROP TABLE IF EXISTS employee;
CREATE TABLE employee(
  id INT autoIncrement, PRIMARY KEY NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NOT NULL,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
  FOREIGN KEY (manager_id) REFERENCES employee(id) 
  ON DELETE CASCADE SET NULL
);

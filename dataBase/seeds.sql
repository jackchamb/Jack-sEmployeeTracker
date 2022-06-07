INSERT INTO employee(first_name, last_name, role_id, manager_id) 
VALUES ('John', 'Smith', 1, NULL), ('Sally', 'Johnson', 2, 1), ('Bob', 'Jones', 3, NULL), ('Mary', 'Williams', 4, NULL), ('Mike', 'Brown', 5, NULL), ('Adam', 'Davis', 6, NULL);

INSERT INTO department(department_name)
VALUES ('IT'), ('HR'), ('Sales'), ('Marketing'), ('Admin');

INSERT INTO role(title, salary, department_id)
VALUES ('Manager', '150000', 1), ('Developer', '100000', 2), ('Salesperson', '80000', 3), ('Marketer', '70000', 4), ('Admin', '100000', 5);

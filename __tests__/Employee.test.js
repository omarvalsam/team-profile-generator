const Employee = require('../lib/Employee');

test("able to get a name through constructure argument", () => {
  const name = "omar";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("creates a employee id", () => {
  const id = "1";
  const employee = new Employee("omar", id, "omarvalsam@gmail.com");
  expect(employee.id).toBe(id);
});

test("returns an email", () => {
  const email = "omarvalsam@gmail.com";
  const employee = new Employee("OMAR", 1, email);
  expect(employee.getEmail()).toBe(email);
});

test("Creates employee role", () => {
  const role = "Employee";
  const employee = new Employee("omar", 1, "omarvalsam@gmail.com");
  expect(employee.getRole()).toBe(role);
});
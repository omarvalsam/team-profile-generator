const Intern = require("../lib/Intern");

test("Ability to set school using constructor function", () => {
    const school = "Demon King Academy";
    const employee = new Intern("Anos Voldigoad", 1, "trueDemonKing@gmail.com", school);
    expect(employee.school).toBe(school);
  });

  test("getRole() should return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("anos", 1, "TrueDemonKing@gmail.com", "AnosVoldigaod");
    expect(employee.getRole()).toBe(role);
  });
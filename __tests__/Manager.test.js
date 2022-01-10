const Manager = require("../lib/Manager");

test("Ability to set office number using constructor function", () => {
    const officeNumber = "1234";
    const employee = new Manager("Franken Stein", 1, "FS@SoulReaperAcademy.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("getRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Franken", 1, "FS@SoulReaperAcadmey.com", "franKenStein");
    expect(employee.getRole()).toBe(role);
  });
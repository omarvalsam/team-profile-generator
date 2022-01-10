const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const github = "omarvalsam";
    const employee = new Engineer("Omar", 1, "omarvalsam@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("omar", 1, "omarvalsam@gmail.com", "omarvalsam");
    expect(employee.getRole()).toBe(role);
  });
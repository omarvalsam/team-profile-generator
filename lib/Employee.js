module.exports = class Employee{

// Employee Constructor
constructor(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
};

// Get name from input
getName () {
  return this.name;
};

// return ID from input
getId () {
  return this.id;
};

// Return the email input
getEmail () {
  return this.email;
};

// Returns "Employee"
getRole() {
  return "Employee";
}
}

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')


function generateCards(employeeArr) {
  let cards = []
  for (let i = 0; i < employeeArr.length; i++) {
    const teamArray = employeeArr[i];
    switch (teamArray.getRole()) {
      case 'Manager':
        const manager = new Manager(teamArray.id, teamArray.name, teamArray.email, teamArray.officeNumber);
        cards.push(generateManagerCard(manager));
        break;
      case 'Engineer':
        const engineer = new Engineer(teamArray.id, teamArray.name, teamArray.email, teamArray.github);
        cards.push(generateEngineerCard(engineer));
        break;
      case 'Intern':
        const intern = new Intern(teamArray.id, teamArray.name, teamArray.email, teamArray.school);
        cards.push(generateInternCard(intern));
        break;
    }
  }
  return cards.join(``)
}

let generateManagerCard = (Manager) => {
  return `
    <div>
      <h3>${Manager.getName()}</h3>
      <h6>${Manager.getRole()}</h6>
      <ul>
        <li>ID: ${Manager.getId()}</li>
        <li>Email: ${Manager.getEmail()}</li>
        <li>Office Number: ${Manager.getOfficeNumber()}</li>
      </ul>
  </div>
  `
}

let generateEngineerCard = (Engineer) => {
  return `
  <div>
      <h3>${Engineer.getName()}</h3>
      <h6>${Engineer.getRole()}</h6>
      <ul >
        <li>ID: ${Engineer.getId()}</li>
        <li>Email: ${Engineer.getEmail()}</li>
        <li>GitHub: ${Engineer.getGithub()}</li>
      </ul>
  </div>
  `
};

let generateInternCard = (Intern) => {
  return `
  <div>
      <h3>${Intern.getName()}</h3>
      <h6>${Intern.getRole()}</h6>
      <ul >
        <li>ID: ${Intern.getId()}</li>
        <li>Email: ${Intern.getEmail()}</li>
        <li>School: ${Intern.getSchool()}</li>
      </ul>
  </div>
  `
}

function genCard(employeeArr) {
  console.log(employeeArr)
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>My Team</title>
</head>
<body>
  <div>
    <h1>My Team</h1>
    ${generateCards(employeeArr)}
  
  </body>
</html>
    `
}


module.exports = genCard;
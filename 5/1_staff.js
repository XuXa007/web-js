let mem = [];
function setStaf(ui) {
  for (let i = 0; i < ui.length; i++) {
    const empName = {
      name: ui[i],
      number: ui[i].length,
    };
    mem.push(empName);
  }
  return mem;
}

function printEmployee(emList) {
  for (const employee of emList) {
    console.log(`Name: ${employee.name} - Personal Number: ${employee.number}`);
  }
}

let userInput = [
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
];

setStaf(userInput);
printEmployee(mem);

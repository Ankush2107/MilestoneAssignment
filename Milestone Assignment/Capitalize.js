const prompt = require('prompt-sync')();
function capitalizeName(name) {
    let modifiedName = name[0].toUpperCase() + name.slice(1);
    modifiedName = name[0].toLowerCase() !== name[0] ? name : modifiedName;
    return modifiedName;
}
  
let userInput = prompt("Enter your name: ");
let capitalizedInput = capitalizeName(userInput);
console.log(capitalizedInput);
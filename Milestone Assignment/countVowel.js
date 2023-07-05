const prompt = require('prompt-sync')();
function countVowels(name) {
    let countVowel = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i in name) {
      let character = name[i].toLowerCase();
      if (vowels.includes(character)) {
        countVowel++;
      }
    }
  
    return countVowel;
  }
  
  let userInput = prompt("Enter your name: ");
  let numVowels = countVowels(userInput);
  console.log("Number of vowels in the name: " + numVowels);

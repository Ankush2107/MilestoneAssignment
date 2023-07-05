let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printNumbers(array) {
    for (let i in array) {
      let number = array[i];
  
      if (number % 3 === 0 && number % 2 !== 0) {
        console.log(number);
      }
    }
}
  
  
printNumbers(numbers);
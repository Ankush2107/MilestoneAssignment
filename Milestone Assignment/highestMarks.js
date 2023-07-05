const marks = [85, 92, 78, 96, 88];

function findHighestMarks(marks) {
    let highestMarks = marks[0];
  
    for (let i in marks) {
      highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }
  
    console.log('Highest marks:', highestMarks);
  }
  findHighestMarks(marks); 
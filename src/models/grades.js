function createRandomGrade()
{
  return {
    name: "name",
    assignment: "assignment",
    grade: 100
  };
}

let min = 1;
let max = 1;

const grades = [];
for(let i = 0; i < Math.floor(Math.random()*(max-min)+min); i++)
  grades.push(createRandomGrade());
  
module.exports = grades;

const names = [
  "Rodrick Mcdaniel",
  "Deangelo Clay",
  "Ben Salazar",
  "Julian Allen",
  "Luis Merritt",
  "Isidro Chandler",
  "Kristofer Lloyd",
  "Joesph Dennis",
  "Evan Foster",
  "Antwan Hoover",
  "Marlin Gould",
  "Jacob Camacho",
  "Sheree Friedman",
  "Goldie Livingston",
  "Adele Page",
  "Sandra Curry",
  "Eva Werner",
  "Kim Martinez",
  "Ora Fritz",
  "Norma Barker"
];

function createRandomGrade()
{
  let randName = names[Math.floor(Math.random()*names.length)];
  let randNum = Math.floor(Math.random()*5898+101);
  while(String(randNum).length < 4)
    randNum = "0"+randNum;
  return {
    name: randName,
    assignment: `Homework ${randNum}`,
    grade: (Math.random()*(100-39)+39).toFixed(0)
  };
}

let min = 4;
let max = 8;

const grades = [];
for(let i = 0; i < Math.floor(Math.random()*(max-min)+min); i++)
{
  let randGrade = createRandomGrade()
  if(grades.findIndex((grade)=> grade.name === randGrade.name && grade.assignment === randGrade.assignment) === -1)
    grades.push(randGrade);
  else
    i--;
} 
module.exports = grades;

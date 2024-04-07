export function reportYoungestAgeAndTotalSalary(people) {
  return `youngestAge: ${youngestAge(people)}, totalSalary: ${totalSalary(people)}`;
}


function youngestAge(people) {
  return Math.min(...people.map((p) => p.age));
}

function totalSalary(people) {
  return people.reduce((total, p) => total + p.salary, 0);
}
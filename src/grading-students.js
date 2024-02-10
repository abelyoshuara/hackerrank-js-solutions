function gradingStudents(grades) {
  return grades.map((grade) => {
    const round = Math.ceil(grade / 5) * 5;
    return grade > 37 && round - grade < 3 ? round : grade;
  });
}

console.log(gradingStudents([73, 67, 38, 33]));

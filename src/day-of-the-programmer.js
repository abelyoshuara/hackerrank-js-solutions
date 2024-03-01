function dayOfProgrammer(year) {
  if (year === 1918) {
    return "26.09.1918";
  }
  const isLeapYear =
    (year < 1918 && year % 4 === 0) ||
    year % 400 === 0 ||
    (year % 4 === 0 && year % 100 !== 0);

  return `${isLeapYear ? 12 : 13}.09.${year}`;
}

console.log(dayOfProgrammer(2017) === "13.09.2017");
console.log(dayOfProgrammer(2016) === "12.09.2016");
console.log(dayOfProgrammer(1800) === "12.09.1800");

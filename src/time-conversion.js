function timeConversion(s) {
  const hour = s.slice(0, 2);
  const result = s.slice(0, -2);

  if (/(PM)/.test(s)) {
    let newHour = Number(hour) + 12;
    if (hour === "12") newHour = 12;
    return result.replace(hour, newHour);
  }

  return hour === "12" ? result.replace("12", "00") : result;
}

console.log(timeConversion("12:01:00PM")); // 12:01:00
console.log(timeConversion("12:01:00AM")); // 00:01:00
console.log(timeConversion("11:01:00AM")); // 11:01:00
console.log(timeConversion("07:05:45PM")); // 19:05:45
console.log(timeConversion("01:05:45PM")); // 13:05:45

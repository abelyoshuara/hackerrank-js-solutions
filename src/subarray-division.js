function birthday(s, d, m) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    count += s.slice(i, i + m).reduce((a, c) => a + c, 0) === d ? 1 : 0;
  }

  return count;
}

console.log(birthday([1, 2, 1, 3, 2, 5], 3, 2));
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));
console.log(birthday([4], 4, 1));

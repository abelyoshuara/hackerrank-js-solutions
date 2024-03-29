function compareTriplets(a, b) {
  const result = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      result[0]++;
    } else if (a[i] < b[i]) {
      result[1]++;
    }
  }

  return result;
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10])); // [1, 1]
console.log(compareTriplets([17, 28, 30], [99, 16, 8])); // [2, 1]

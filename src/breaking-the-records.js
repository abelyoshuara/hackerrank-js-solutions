function breakingRecords(scores) {
  const result = [0, 0];
  let max = scores[0];
  let min = scores[0];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i];
      result[0]++;
    } else if (scores[i] < min) {
      min = scores[i];
      result[1]++;
    }
  }

  return result;
}

// console.log(breakingRecords([12, 24, 10, 24]));
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));

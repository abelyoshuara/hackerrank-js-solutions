function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const result = [0, 0];

  for (const apple of apples) {
    const loc = apple + a;
    if (loc >= s && loc <= t) result[0]++;
  }

  for (const orange of oranges) {
    const loc = orange + b;
    if (loc >= s && loc <= t) result[1]++;
  }

  console.log(result[0]);
  console.log(result[1]);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

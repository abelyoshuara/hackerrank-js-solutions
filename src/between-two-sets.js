function getTotalX(a, b) {
  let acc = 0;

  for (
    let i = Math.max(...a);
    i >= Math.max(...a) && i <= Math.min(...b);
    i++
  ) {
    if (a.every((e) => i % e === 0) && b.every((e) => e % i === 0)) {
      acc++;
    }
  }

  return acc;
}

console.log(getTotalX([2, 4], [16, 32, 96]));

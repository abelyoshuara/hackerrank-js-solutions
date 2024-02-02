function simpleArraySum(ar) {
  return ar.reduce((acc, curr) => acc + curr, 0);
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));

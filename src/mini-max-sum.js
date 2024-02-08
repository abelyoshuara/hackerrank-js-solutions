function miniMaxSum(arr) {
  const total = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(`${total - Math.max(...arr)} ${total - Math.min(...arr)}`);
}

miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([1, 3, 5, 7, 9]);

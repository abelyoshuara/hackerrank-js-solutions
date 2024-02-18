function migratoryBirds(arr) {
  let max = 0;
  let maxId = arr.length;
  const a = Array(arr.length).fill(0);

  for (const num of arr) {
    a[num]++;

    if (a[num] > max) {
      max = a[num];
      maxId = num;
    } else if (a[num] === max && num < maxId) {
      maxId = num;
    }
  }

  return maxId;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
console.log(migratoryBirds([7, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));

function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zer = 0;

  for (const i of arr) {
    if (i < 0) {
      neg++;
    } else if (i > 0) {
      pos++;
    } else {
      zer++;
    }
  }

  pos /= arr.length;
  neg /= arr.length;
  zer /= arr.length;

  console.log(`${pos.toFixed(6)}\n${neg.toFixed(6)}\n${zer.toFixed(6)}`);
}

plusMinus([-4, 3, -9, 0, 4, 1]);

/*
int x1, int v1: starting position and jump distance for kangaroo 1
int x2, int v2: starting position and jump distance for kangaroo 2
*/
function kangaroo(x1, v1, x2, v2) {
  return v1 > v2 && (x2 - x1) % (v1 - v2) === 0 ? "YES" : "NO";
}

console.log(kangaroo(0, 3, 4, 2)); // YES
console.log(kangaroo(0, 2, 5, 3)); // NO

let a = [1, 3, 2];

console.log(a.toReversed());     // => [2, 3, 1]
console.log(a);                  // => [1, 3, 2]

console.log(a.toSorted());       // => [1, 2, 3]
console.log(a);                  // => [1, 3, 2]

console.log(a.toSpliced(1,1,4)); // => [1, 4, 2]
console.log(a);                  // => [1, 3, 2]

console.log(a.with(2, 8));       // => [1, 3, 8]
console.log(a);                  // => [1, 3, 2]
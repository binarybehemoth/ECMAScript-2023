let x = [8, 4, 1, 4, 124, 1, 14, 11, 9, 100, 6, 44];
const y = [5, 6, 99, 5, 3, 4];
x.splice(0, 0, ...y);     // 80k ops/s
x.unshift(...y);           // 70k ops/s
const z = [...y, ...x];   // 17k ops/s
const z = y.concat(x); // 6k ops/s

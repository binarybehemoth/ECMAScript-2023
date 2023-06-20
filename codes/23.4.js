let x;
x??=5;             // if (x===null || x===undefined) x=5;
console.log(x);  // 5
x&&=6;            // if (x) x=6;
console.log(x);  // 6
x||=7;              // if (!x) x=7;
console.log(x);  // 6

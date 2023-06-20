var s = new Set([1,2,3]);  // any iterable will do
var a = [0,...s,4,5];  //  [0, 1, 2, 3, 4, 5]     spread
var [x,y,z] = a;
var [x,y,...rest] = a;    // rest
console.log(x,y,z,rest); // 0 1 2 [2, 3, 4, 5]

var arr = [1, 2, 3], first, last;
[x, ...y] = arr;                        // rest operator
console.log(y);                       // [2,3]
[first, ...[arr[2], last]] = arr;   // rest operator
console.log(first);                   // 1
console.log(last);                    // 3
console.log(arr);                     // [1,2,2]
console.log(...arr);                   // 1 2 2

console.log(Math.max(...a, ...arr));   // 5

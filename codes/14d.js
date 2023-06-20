var s = new Set([1, 2, 3]);
s.add(10);
var lastValue = Array.from(s).pop();
console.log(lastValue); // 10

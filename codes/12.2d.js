const array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];

console.log(array.findLast(n => n.value % 2 === 1));       // { value: 3 }
console.log(array.findLastIndex(n => n.value % 2 === 1));  // 2
console.log(array.findLastIndex(n => n.value === 12));     // -1

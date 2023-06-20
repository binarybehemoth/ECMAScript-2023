console.log([]+[]); // ""
console.log([]+{}); // [object Object]
console.log({}+[]); // [object Object]
console.log({}+{}); // [object Object][object Object]
console.log(++[[]][+[]]+[+[]]); // 10

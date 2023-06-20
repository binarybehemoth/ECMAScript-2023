console.log(/./.test("\n"));   // false
console.log(/./s.test("\n"));  // true

console.log(/[^]/s.test("\n"));  // true

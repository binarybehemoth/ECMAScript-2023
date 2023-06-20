function *gf(){
   yield * new Set([1,2,3,2,1]);
}
var v=gf();
console.log(v.next().value);  // 1
console.log(v.next().value);  // 2
console.log(v.next().value);  // 3
console.log(v.next().value);  // undefined
console.log(v.next()); //  {value: undefined, done: true}
console.log([...gf()]);   // [1,2,3]

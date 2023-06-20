const map = Function.prototype.call.bind(Array.prototype.map);
console.log(map([1,2,3],e=>(e*e*e)));     // [1,8,27]

function C(){this.p=10;}
C.prototype.p = 100;

var a = new C;
var b = new C;

console.log(a.p);                    // 10
//console.log(a.prototype.p);  // TypeError
console.log(C.p);                   // undefined
console.log(C.prototype.p);    // 100

b.p = 300;
console.log(a.p);  // 10

function C() {}
var o = new C;
console.log(C+"");  // function C() {}
console.log(o+"");  // [object Object]
C.prototype.toString = function a(){return "Haha!";}
console.log(C+"");  // function C() {}
console.log(o+"");  // Haha!

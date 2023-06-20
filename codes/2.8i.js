function A() {}
function B() {}
function C() {}
B.prototype = Object.create(A.prototype);
C.prototype = Object.create(B.prototype);
var o = new C();
console.log(o instanceof C      ,  
            C.prototype.isPrototypeOf(o));         // true true
console.log(o instanceof B       , 
            B.prototype.isPrototypeOf(o));         // true true
console.log(o instanceof A       , 
            A.prototype.isPrototypeOf(o));         // true true
console.log(o instanceof Object, 
            Object.prototype.isPrototypeOf(o)); // true true

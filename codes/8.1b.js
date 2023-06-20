function F(){this.x=100;}
class C extends F{}
var o = new C;
console.log(o instanceof C);   // true
console.log(o instanceof F);   // true
console.log('x' in o);              // true

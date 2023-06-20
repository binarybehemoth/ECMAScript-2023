var handler = {
   get: function(target, prop, receiver) {
      return target[prop]*2;
   },
   set: function(target, prop, value, receiver) {
      target[prop]=value+100;
      return true;
   }
};
var o = {a:3};
var p = new Proxy(o, handler);

console.log(o.a);  // 3
console.log(p.a);  // 6
p.b = p.a;            // (changing p changes o)
console.log(o.b);  // 106
console.log(p.b);  // 212 ... (106*2)
o.b = o.a;            // (changing o also changes p)
console.log(o.b);  // 3
console.log(p.b);  // 6 ... (3*2)

var p = new Proxy(o,{  
      // (restore to default behaviors for these two handlers)
   get: Reflect.get,
   set: Reflect.set
});
p.b = p.a;
console.log(p.b);  // 3

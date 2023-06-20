var p = new Proxy({}, {
   preventExtensions: function(target) {
      Object.preventExtensions(target);
      return true;
   }
});
p.a=100
console.log(Object.preventExtensions(p));  // Proxy {}
p.b=200;
console.log(p.a,p.b);  // 100 undefined

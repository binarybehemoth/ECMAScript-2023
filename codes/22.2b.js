var p = new Proxy({}, {
   has: function(target, prop) {
      return true;
   }
});
console.log('a' in p);                 // true
console.log(Reflect.has(p,'a'));  
          // true  ... (affects the corresponding Reflect method)
p = new Proxy({},Reflect);
          // (restores all default behaviors)
console.log('a' in p);                 // false

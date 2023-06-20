var p = new Proxy({a:2}, {
   getOwnPropertyDescriptor: function(target, prop) {
      console.log('called: ' + prop);
      return { configurable: true, enumerable: true, 
                   value: 1};
   }
});
console.log(Object.getOwnPropertyDescriptor(p, 'a').value); // called: a
// 1

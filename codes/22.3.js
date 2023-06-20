var p = new Proxy({}, {
   defineProperty: function(target, prop, descriptor) {
      Reflect.defineProperty(target,prop,descriptor);
      console.log('called: ' + prop);
      return true;
   }
});
Object.defineProperty(p, 'a', {configurable:true, 
                        enumerable:true, value:10}); // "called: a"
console.log(Object.getOwnPropertyDescriptor(p,'a'));  
// {value: 10, writable: false, enumerable: true, 
//  configurable: true}

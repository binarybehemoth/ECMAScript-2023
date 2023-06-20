var p = new Proxy({a:3}, {
   deleteProperty: function(target, prop) {
      if (prop in target){
         delete target[prop];
         console.log('property removed: ' + prop);
         return true;
      } else {
         console.log('property not found: ' + prop);
         return false;
      }
   }
});
delete p.a;  // property removed: a
delete p.a;  // property not found: a

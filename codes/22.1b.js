var p = new Proxy(function() {console.log('Hi');}, {
   construct: function(target, argumentsList, newTarget) {
      return { value: argumentsList[0] * 10 };
   }
});
var o = new p(10);
console.log(o.value); // 100

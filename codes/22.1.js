function f(...args) {return args[0];}

var p = new Proxy(f, {
   apply: function(target, thisArg, argumentsList) {
      console.log('called: ' + argumentsList.join(','));
      let sum=0;
      for (v of argumentsList) sum+=v;
      return sum;
   }
});
console.log(p(1,2,3,5)); // called: 1,2,3,5
                                    // 11

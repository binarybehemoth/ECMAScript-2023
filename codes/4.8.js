var makeCounter = function() {
   var privateCounter = 0;  // private
   function changeBy(val) {  // private
      privateCounter += val;
   }
   return {
      increment: function() {changeBy(1);},      // public
      decrement: function() {changeBy(-1);},    // public
      value: function() {return privateCounter;}  // public
   }  
};
var x = makeCounter();
console.log(x.value()); // 0
x.increment();
x.increment();
console.log(x.value()); // 2
x.decrement();
console.log(x.value()); // 1

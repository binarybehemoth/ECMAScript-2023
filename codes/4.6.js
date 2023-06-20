function S(){
   var sum=0;
   for (i=0; i<arguments.length; i++){
      sum+=arguments[i];
   }
   console.log(arguments.callee);  // shows the function definition
   return sum;
}
console.log(S(10,20,30));  // ... 60
console.log((function(a,b,c){}).length);  // 3

   var a = [1,2,3,4];
   function minus(a,b){return a-b;}
   console.log(a.reduce(minus));  // -8
   console.log(a.reduceRight(minus));  // -2

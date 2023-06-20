   var a = [3,5,9,1,3,2,4,7,8];
   function biggerThan5(n){return n>5;}
   console.log(a.some(biggerThan5));  // true
   console.log(a.every(biggerThan5)); // false
   console.log(a.find(biggerThan5)); // 9
   console.log(a.findIndex(biggerThan5)); // 2
   console.log(a.filter(biggerThan5)); // [9,7,8]

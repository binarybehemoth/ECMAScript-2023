   var a = Array(3);
   console.log(a.length);  // 3
   console.log(Array.isArray(a));  // true
   
   a = Array.of(3);
   console.log(a.length); // 1
   
   b = a;                   // passed by value
   c = Array.from(a); // passed by value
   delete a;
   console.log(b);  // [3]
   console.log(c);  // [3]
   
   console.log(Array.from('abc'));  // ['a','b','c']
   console.log(Array.from(new Set(['foo',window])));  // ['foo',window]
   console.log(Array.from(new Map([[1,2],[2,4],[4,8]])));  // [[1,2],[2,4],[4,8]]
   console.log(Array.from([1, 2, 3], x => x + x)); // [2,4,6]
   console.log(Array.from({length: 5}, (v, i) => i)); // [0,1,2,3,4] 
                                                                                   
// (‘duck typing’ faking array)

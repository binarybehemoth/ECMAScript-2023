   var a = ['a','b','c'];
   
   var e = a.entries();
   console.log(e.next().value); // [0,'a']
   console.log(e.next().value); // [1,'b']
   console.log(e.next().value); // [2,'c']
   
   var k = a.keys();
   console.log(k.next().value); // 0
   console.log(k.next().value); // 1
   console.log(k.next().value); // 2
   
   var v = a.values();
   console.log(v.next().value); // a
   console.log(v.next().value); // b
   console.log(v.next().value); // c  
   console.log(v.next().value); // undefied   

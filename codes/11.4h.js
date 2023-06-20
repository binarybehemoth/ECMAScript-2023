   var s = "abCDef"; 
   console.log(s.replace(/(..)CD/,'$1'));  // abef
   console.log(s.search(/CD/));  // 2
   console.log(s.match(/a/));
         // ["a", index: 0, input: "abCDef"]
   console.log(s.match(/(...)(...)/));     
         // ["abCDef", "abC", "Def", index: 0, input: "abCDef"]

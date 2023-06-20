   var s = "abcdefghij"; 
   console.log(s.search(/..ef./));     // 2
   console.log(s.search(/ABC|bbb|de[H-z]/)); // 3
   console.log(s.search(/[ABC|bbb|dee-z]/)); // 1
   console.log(s.search(/[^0-9a-z]/)); // -1

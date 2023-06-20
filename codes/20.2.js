   var s = "abc"; 
   console.log(s.replace(/a(.)(.)/,"$2"));  // c
   console.log(s.replace(/a(?:.)(.)/,"$1"));  // c
   console.log(s.replace(/a/,"$&$&"));  // aabc
   console.log(s.replace(/b/,"$`"));  // aac
   console.log(s.replace(/a/,"$'"));  // bcbc

   var a = "\\\uFFFF";
   console.log(a[0]);       // \
   console.log(a.length);  // 2
   
   var b = "你好吗？";
   console.log(b.length);  // 4
   
   var c = "\n\n\n X";
   console.log(c.length);  // 5
   
   //var c = "\"; // SyntaxError

   function capitalizeFirstLetter(string) {
      return string[0].toUpperCase() + string.slice(1);
   }

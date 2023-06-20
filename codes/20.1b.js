   var s = " a1b2c3@@@"; 
   console.log(s.search(/\w\W/)); // 6
   console.log(s.search(/\d\D/)); // 2
   console.log(s.search(/\s\S/)); // 0

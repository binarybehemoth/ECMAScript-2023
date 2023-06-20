   var s = "Hello World"; 
   console.log(s.search(/\b/));        // 0
   console.log(s.search(/o\b/));      // 4
   console.log(s.search(/\B\B\B/)); // 1
   console.log(s.search(/^.../));     // 0
   console.log(s.search(/...$/));      // 8

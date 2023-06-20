   var s = "a\nb\nc"; 
   console.log(s.replace(/^./g,"x")); // x
                                      // b	 
                                      // c
   console.log(s.replace(/^./gm,"x")); // x
                                       // x
                                       // x

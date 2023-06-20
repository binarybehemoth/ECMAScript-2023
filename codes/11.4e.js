   var s = "Hello World"; 
   console.log(s.toLowerCase()=="hello world"); // true

   console.log('alphabet'.toLocaleUpperCase()); 
                                                                   // 'ALPHABET'
   console.log('i\u0307'.toLocaleUpperCase('lt-LT')); // 'I' 
   console.log('i\u0307'.toLocaleUpperCase(
     ['lt', 'LT', 'lt-LT', 'lt-u-co-phonebk', 'lt-x-lietuva'])); // 'I'

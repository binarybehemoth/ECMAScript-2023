var s = "abc"; 
console.log(s.replace(/ab/,"x"));          // xc
console.log(s.replace(/a(?=b)/,"x"));    // xbc
console.log(s.replace(/a(!=b)/,"x"));    // abc
console.log(s.replace(/(?<=a)b/,"x")); // axc
console.log(s.replace(/(?<!a)b/,"x"));  // abc

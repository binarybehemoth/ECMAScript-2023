   var r = /a/gi;
   console.log(r.exec("123abcABC"));  // ["a", index: 3, input: "123abcABC"]
   console.log(r.test("123abcABC")); // true
   console.log(r.toString()); // /a/gi

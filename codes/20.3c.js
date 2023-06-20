var s = "Hello你好"; 
console.log(s.search(/[\u{00FF}-\u{FFFF}]/u)); // 5
console.log(s.search(/[\u{00FF}-\u{FFFF}]/));//SyntaxError

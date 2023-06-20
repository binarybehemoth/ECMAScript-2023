console.log("abcd".charAt(2));  // c
console.log(String.fromCharCode(65, 66, 67));  // ABC
console.log(String.fromCodePoint(194564));     // 你 
console.log(String.fromCodePoint(
   0x1D306, 0x61, 0x1D307));//"\uD834\uDF06a\uD834\uDF07"
console.log(String.raw`Hi\n${2+3}!`);  // Hi\n5!
console.log(String.raw(
           {raw: ['foo', 'bar', 'baz'] }, 2 + 3, 'Java' + 'Script')); 
                                                // 'foo5barJavaScriptbaz')

console.log("\u9999");   // 香
//console.log("\u55");   // SyntaxError: Invalid Unicode 
console.log("\u{55}");   // U: no error if tagged with {}

function tag(s){
    console.log(s[0]);      // undefined
    console.log(s[1]);      // undefined
    console.log(s.raw[0]);  // \u55 \u{55}
}
tag `\u55 \u{55}`;

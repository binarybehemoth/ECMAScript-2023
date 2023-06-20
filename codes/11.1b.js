const paragraph_separator = "\u2028";
const line_separator = "\u2029";
let code = '"\u2028\u2029"'
console.log(JSON.parse(code)); // evaluates to "\u2028\u2029" in all engines
eval(code);    // throws a SyntaxError in old engines

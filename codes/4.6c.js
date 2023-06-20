var code = "console.log(100);"
var f = Function(code); f(); // 100
eval(code); // 100

var f = function(){console.log(arguments);};
f(); var a = new f();
// [callee: function, Symbol(Symbol.iterator): function]
// [callee: function, Symbol(Symbol.iterator): function]

var g = ()=>console.log(arguments);
//g();  // ReferenceError
//var b = new g(); // TypeError

var C = function(){console.log(this);}
function f(){console.log(this);}
console.log(this);   // Window
var a = C();           // Window
var b = new C;       // C{}
b.g = f; b.g();        //  {f: function}
var c = {h:function(){console.log(this);}} 
c.h();  // Object {f: function}
var d = c.h; d();  // Window
var e = {i:function(){eval("f()");}} e.i();  // Window
var o = {a:10}; f.call(o);  // Object {f: function}

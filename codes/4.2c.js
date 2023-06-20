var f=x=>x;             console.log(f(3));  // 3
var g=x=>{x};         console.log(g(3));  // undefined
var h=function(x){x};console.log(h(3));  // undefined
var i=x=>{a:1};       console.log(i(3));  // undefined
var j=x=>({a:1});    console.log(j(3));  // {a:1}

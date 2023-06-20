const o = {a:1, b:{c:2}};
console.log(o.b?.c);    // 2
console.log(o.c?.c);    // undefined
//console.log(o.c.c);   // TypeError

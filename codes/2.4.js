var iterationsTotal = 10000000;  // 10 million
var o;
var t1 = Date.now(),t2;
for (let i=0; i<iterationsTotal; i++) {
   o = {a:1,b:2,c:3,d:4,e:5};
   delete o.a; delete o.b; delete o.c; delete o.d; delete o.e;
}
console.log ((t2=Date.now())-t1);  // 6135
for (let i=0; i<iterationsTotal; i++) {
   o = {a:1,b:2,c:3,d:4,e:5};
   o.a = o.b = o.c = o.d = o.e = undefined;
}
console.log (Date.now()-t2);  // 205

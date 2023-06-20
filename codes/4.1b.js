function f(a,b,...r){
   console.log(a);
   console.log(b);
   for (v of r) console.log(v);
   console.log(Array.isArray(r));
}
f(1,2,3,4,5);  // 1 2 3 4 5 true

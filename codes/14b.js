var o = {};
var s = new Set("hi"); // accepts any iterable value
console.log(s.size); // 2;
s.add('h'); console.log(s.size); // 2
s.add(o);   console.log(s.size); // 3
s.add(o);   console.log(s.size); // 3
s.add({}); console.log(s.size); // 4
s.add({}); console.log(s.size); // 5
s.add(NaN); console.log(s.size); // 6
s.add(NaN); console.log(s.size); // 6
s.forEach((v)=>{console.log(v);});  // h,i,Object,Object,Object,NaN

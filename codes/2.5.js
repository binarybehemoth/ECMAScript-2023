var o = {
  f1: function() { return 1; },
  f2() { return 2; },
  ['f' + 3]() { return 3; },   // computed method name
  get f4() {return 4;},
  set f5(v){this.value=v;},
   *f6(){},
   async f7(){}
};
console.log(o.f1(), o.f2(), o.f3(), o.f4); // 1 2 3 4
o.f5=5; console.log(o.value);  // 5

function f({a,b:[c,d],e=100}){
   console.log(a);
   //console.log(b); // ReferenceError
   console.log(c);
   console.log(d);
   console.log(e);
}
f({a:10,b:[20,30]});  // 10,20,30,100

function g({a="foo",b}={}){  
   console.log(a,b);
};
g({a:1,b:2}); // 1 2
g(); // foo undefined

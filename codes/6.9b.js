class C{
   greet(){return 'Hello';}
   hi(p){ return p+', hi.';}
}
function createProxyWithoutPrototype(subject){//Composition
   return {
      greet:function(){
         return subject.greet()+' world';
      },
      hi:function(){
         return subject.hi.apply(subject,arguments);
      }
   }
}
var o = new C;
var p = createProxyWithoutPrototype(o);
console.log(p.greet());         // Hello world
console.log(p.hi('John'));      // John, hi.
console.log(p instanceof C);  // false

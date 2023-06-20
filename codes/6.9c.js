class C{
   greet(){return 'Hello';}
   hi(p){ return p+', hi.';}
}
function createProxyByMonkeyPatching(subject){          
                                             // Object Augmentation
   var greetOri = subject.greet;// prevents infinite recursion
   var hiOri = subject.hi;          // prevents infinite recursion
   subject.greet = function(){
                             return greetOri.call(this)+' world';}
   subject.hi = function(){
                             return hiOri.apply(subject,arguments);}
   return subject;
}
var o = new C;
var p = createProxyByMonkeyPatching(o);
console.log(p.greet());         // Hello world
console.log(p.hi('John'));      // John, hi.
console.log(p instanceof C);  // false
console.log(o.greet());         // Hello world  (original subject changed too)

class C{
   greet(){return 'Hello';}
   hi(p){ return p+', hi.';}
}
function createProxyWithPrototype(subject){ // Composition
   function MyProxy(subject){
      this.subject = subject;
   }
   MyProxy.prototype = Object.create(Object.getPrototypeOf(subject));
   MyProxy.prototype.greet = function(){
      return this.subject.greet()+' world';
   }
   MyProxy.prototype.hi = function(){
      return this.subject.hi.apply(this.subject,arguments);
   }
   return new MyProxy(subject);
}
var o = new C;
var p = createProxyWithPrototype(o);
console.log(p.greet());          // Hello world
console.log(p.hi('John'));      // John, hi.
console.log(p instanceof C);  // true

function C(x){
   this.v = x;
   new function(){console.log(this);}; // Object {}
   (()=>{console.log(this);})();          // C {v: 10}
}
new C(10);

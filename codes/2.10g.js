function C(d, callback) {
    this.data = d;
    f(()=>{
       console.log(this.data);  
    });
}
function f(cb) {
   cb();
}
var o = new C('Hello', f);  // Hello

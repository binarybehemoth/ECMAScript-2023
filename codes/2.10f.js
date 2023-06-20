function C(d, callback) {
    this.data = d;
    f(function () {
       console.log(this.data);
    }.bind(this));  
}
function f(cb) {
   cb();
}
var o = new C('Hello', f);  // Hello

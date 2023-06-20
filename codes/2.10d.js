function C(d, callback) {
    this.data = d;
    f(function () {
       console.log(this.data);
    });
}
function f(cb) {
   cb();
}
var o = new C('foo', f);   // undefined

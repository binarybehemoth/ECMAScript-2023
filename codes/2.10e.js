function C(d, callback) {
    this.data = d;
    var self = this;
    f(function () {
       console.log(self.data);  
    });
}
function f(cb) {
   cb();
}
var o = new C('Hello', f);  // Hello

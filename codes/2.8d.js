function test() {}
test.prototype.myname = function () {
    console.log('Hello');
}

var a = new test;
console.log(a.__proto__ === test.prototype);//true
a.myname(); // Hello

var obj = {__proto__: test.prototype};
obj.myname(); // Hello

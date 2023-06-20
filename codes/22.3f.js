var obj = {};
var p = new Proxy(obj, {
    getPrototypeOf(target) {
        return Array.prototype;
    }
});
console.log(
    Object.getPrototypeOf(p) === Array.prototype,  // true
    Reflect.getPrototypeOf(p) === Array.prototype,  // true
    p.__proto__ === Array.prototype,                     // true
    Array.prototype.isPrototypeOf(p),                       // true
    p instanceof Array                                             // true
);

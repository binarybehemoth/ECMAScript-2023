var handler= {
    setPrototypeOf(target, newProto) {
        return false;
    }
};
var newProto = {}, target = {};
var p = new Proxy({}, handler);
Reflect.setPrototypeOf(p, newProto); // returns false
Object.setPrototypeOf(p, newProto); // throws a TypeError

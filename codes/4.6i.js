class Base {
  constructor(...args) {
    console.log(new.target === Base);
    console.log(args);
  }
}
const BoundBase = Base.bind(null, 1, 2);
new BoundBase(3, 4); // true, [1, 2, 3, 4]
console.log(new BoundBase() instanceof Base); // true
console.log(new Base() instanceof BoundBase); // true

class Derived extends class {}.bind(null) {}
/* TypeError: Class extends value does not have valid prototype property undefined */

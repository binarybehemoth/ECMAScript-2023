class Base {
  static baseProp = "base";
}
class Derived extends Base {
  static derivedProp = "derived";   // own static properties will be lost
}
const BoundDerived = Derived.bind(null);
console.log(BoundDerived.baseProp);     // "base"
console.log(BoundDerived.derivedProp); // undefined

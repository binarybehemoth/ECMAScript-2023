function f() {
  var s = "hi";
  function g() {
     console.log(s);
  }
  return g;
}
var myFunc = f();
myFunc();  // hi

function list(...args) {
  return args;
}
function addArguments(arg1, arg2) {
  return arg1 + arg2;
}
const leadingThirtySevenList = list.bind(null, 37);
const addThirtySeven = addArguments.bind(null, 37);
console.log(leadingThirtySevenList());           // [37]
console.log(leadingThirtySevenList(1, 2, 3)); // [37, 1, 2, 3]
console.log(addThirtySeven(5));                   // 37 + 5 = 42
console.log(addThirtySeven(5, 10));             // 37...2nd arg ignored

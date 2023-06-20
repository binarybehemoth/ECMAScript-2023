function* gf() {
  yield 1;
  return 2;
  yield 3;
}
var gen = gf();
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: true}
console.log(gen.next()); // {value: undefined, done: true}

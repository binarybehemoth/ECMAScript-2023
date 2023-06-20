function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
}
function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}
var g = generator(10);
console.log(g.next().value); // 10
console.log(g.next().value); // 11
console.log(g.next().value); // 12
console.log(g.next().value); // 20

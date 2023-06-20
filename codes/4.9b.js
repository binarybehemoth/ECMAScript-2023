function* logGenerator() {
  console.log(yield); console.log(yield); console.log(yield);
}
var gen = logGenerator();
gen.next(); 
gen.next(1); // 1
gen.next(2); // 2
gen.next(3); // 3

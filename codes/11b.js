function f(strings, ...values) {
  console.log(strings[0]); // a
  console.log(strings[1]); // bc
  console.log(strings[2]); // d
  console.log(values[0]);  // 42
  console.log(values[1]);  // 999
}
f `a${ 42 }bc${999}d`;

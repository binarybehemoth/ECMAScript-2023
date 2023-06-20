function multiply(a, b) {
  return a * b;
}
const multiplyByTwo = multiply.bind(null, 2);   // Pre-filling the first argument
console.log(multiplyByTwo(5));   // Output: 10 (2 * 5)
console.log(multiplyByTwo(10)); // Output: 20 (2 * 10)

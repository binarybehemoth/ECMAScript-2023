class E extends Function {
   constructor(x) {
      super("return "+JSON.stringify(x)+";");
   }
}
console.log((new E(100))());    // 100

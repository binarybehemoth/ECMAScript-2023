let Person = (function () {
   let privateProps = new WeakMap();
   class Person {
      constructor(name) {
         this.name = name; // this is public
         privateProps.set(this, {age: 45}); // this is private
       }
       greet() {  // Here we can access both name and age
          console.log(`I am ${this.name}. 
                          I am ${privateProps.get(this).age-10}.`);
       }
   }
   return Person;
})();
let j = new Person('Jane');
j.greet();
console.log(j.privateProps);  // undefined

let Person = (function(){
   let age = Symbol();   // declared in another module perhaps?
   class Person {
      constructor(n,a){
         this.name = n;
         this[age] = a;  
      }
      introduce(){
         console.log(
         `My name is ${this.name}. I am ${this[age]-10}.`);
      }
   }
   return Person;
})();

var j = new Person('Jane',45);
j.introduce();  // My name is Jane. I am 35.
console.log(JSON.stringify(j)); // {"name":"Jane"}
console.log(Object.keys(j)); // ["name"]
console.log(j[Object.getOwnPropertySymbols(j)[0]]);  // 45

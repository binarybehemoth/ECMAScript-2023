const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
};

const greetFunction = person.greet; 
greetFunction(); // Output: Hello, my name is undefined and I am undefined years old.

const boundGreetFunction = person.greet.bind(person); boundGreetFunction(); // Output: Hello, my name is John and I am 30 years old.

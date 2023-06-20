/* By default, within setTimeout(), the 'this' keyword will be set to globalThis, which is 'window' in browsers. */
const person = {
  firstName:"Kento",
  lastName: "Narouka",
  display: function() {
    console.log(this.firstName + " " + this.lastName);
  }
}
setTimeout(person.display, 1000);              // undefined undefined
setTimeout(person.display.bind(person),3000);  // Kento Narouka

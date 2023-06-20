class Animal {
   constructor(n,a){
      this.name = n; // prototype variable
      this.age = a;  // prototype variable
   }
   eat(){ // prototype method
      console.log(this.name+' is eating.');
   }
   static comment(){  // static method
      console.log('All animals are cute.');
   }
   whoami(){
      //this.constructor.eat();  // TypeError
      this.constructor.comment();  
                         // this.constructor.staticFunction() allowed
      console.log('I am a nice '+this.constructor.name+'.');
   }
   get intro(){  // getter, to act like prototype variable
      return 'This is '+this.name+'.';
   }
   set rename(n){ // setter
      this.name = n;
   }
}
Animal.prototype.sex = 'm';                                                                   // prototype variable

Animal.prototype.drink = function(){console.log(this.name+' is drinking.');}  
// prototype method

Animal.message = 'We should protect all animals.';                                      // static variable

Animal.comment2 = ()=>console.log(Animal.message);                              // static method

var b = new Animal('Brownie',5);
console.log(b.age,b.sex); // 5 "m"
b.eat();                           // Brownie is eating.
b.drink();                        // Brownie is drinking.
b.whoami();                    // All animals are cute. I am a nice Animal.
Animal.comment();          // All animals are cute.
Animal.comment2();        // We should protect all animals.
console.log(b.intro);         // This is Brownie.
b.rename='Greenie';
b.drink();                        // Greenie is drinking.
console.log(typeof b);      // object 
console.log(b instanceof Animal); // true
//let m1=b.eat; m1();        // TypeError ('this' is undefined)
let m2=Animal.comment; m2(); // All animals are cute.



class Dog extends Animal{
   constructor(n,a,c){
      super(n,a);
      this.color = c;
   }
   eat(){  // method overriding
      console.log(this.name+' is eating some dog food.');
   }
   static comment(){  // method overriding
      super.comment();
      super.comment();
   }
   get intro(){  // method overriding
      return 'This dog is '+this.name+'.';
   }
}

var d = new Dog('Doggie',2,'White');
d.eat();                   // Doggie is eating some dog food.
d.whoami();            // All animals are cute. All animals are 
                              // cute. I am a nice Dog. (late binding)
Dog.comment();    // All animals are cute. All animals are cute.
Dog.comment2();    // We should protect all animals.
console.log(d.intro); // This dog is Doggie.
d.drink();                // Doggie is drinking.
console.log(d.constructor.name);  // Dog






class GermanShepherd extends Dog{  // default contructor
   *bark(){   // generator
      while (true){
          console.log('whoaaaf');
          yield;
          console.log('whoaaaf whoaaf');
          yield;
          console.log('whoaaaf whoaaf whoaf');
          yield;
      }
   }
   async sleep(){  // async function
      await new Promise(resolve=>{
                       console.log(this.name+' has fallen asleep.');
                       resolve();
      }).then(()=>
             console.log(this.name+' seems to have awaken.'));
      console.log('When will '+this.name+' sleep again?');
   }
}
var s = new GermanShepherd('Smartie',3,'Black');
var sb = s.bark();
sb.next(); // whoaaaf
sb.next(); // whoaaaf whoaaf
s.sleep(); // Smartie has fallen asleep.
sb.next(); // whoaaaf whoaaf whoaf
sb.next(); // whoaaaf
// Smartie seems to have awaken.
// When will Smartie sleep again?





var MixedDalmatian = Base => class extends Base {
   jump(){
      console.log(this.name+ ' jumped.');
   }
   *bark(){   // to override bark() in GermanShepherd
      while (true){
         console.log('wok');
         yield;
      }
   }
};
class Dalmatian extends MixedDalmatian(Dog){};   
                                                               // pure breed
class DalShepherd extends MixedDalmatian(GermanShepherd){}  // a crossbreed!

var p = new Dalmatian('Spotty',7,'White');
p.jump();  // Spotty jumped.

var m = new DalShepherd ('Mixy',6,'Grey');
m.jump();    //Mixy jumped.
var mb = m.bark();
mb.next();   // wok
m.sleep();   // Mixy has fallen asleep.
//Mixy seems to have awaken.
//When will Mixy sleep again?









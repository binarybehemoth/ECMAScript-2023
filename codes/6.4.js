var aggregation = (baseClass, ...mixins) => {
    class base extends baseClass {
        constructor (...args) {
            super(...args);
            mixins.forEach((mixin) => {
                copyProps(this,(new mixin));
            });
        }
    }
let copyProps = (target, source) => {  
   // this function copies all properties and symbols, 
   // filtering out some special ones
        Object.getOwnPropertyNames(source)
       .concat(Object.getOwnPropertySymbols(source))
                   .forEach((prop) => {
                 if (!prop.match(
   /^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
       Object.defineProperty(target, prop, 
       Object.getOwnPropertyDescriptor(source, prop));
               })
    }
mixins.forEach((mixin) => { 
        // outside contructor() to allow 
    // aggregation(A,B,C).staticFunction() to be 
    // called etc.
        copyProps(base.prototype, mixin.prototype);
        copyProps(base, mixin);
    });
    return base;
}
class Person{
   constructor(n){
      this.name=n;
   }
}
class Male{
   constructor(s='male'){
      this.sex=s;
   }
}

class Child{
   constructor(a=12){
      this.age=a;
   }
   tellAge(){console.log(this.name+' is '+this.age+' years old.');}
}
class Boy extends aggregation(Person,Male,Child){}
var m = new Boy('Mike');
m.tellAge(); // Mike is 12 years old.

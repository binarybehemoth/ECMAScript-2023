class AnimalsList {
   constructor (...args){
      this.index = -1;
      this.animals = args;
   }
   *[Symbol.iterator](){
      while (this.index<this.animals.length-1){
         this.index++;
         yield this.animals[this.index];
      }
   }
}
var myAnimals = new AnimalsList('Brownie','Greenie','Lucky','Spotty');
for (let v of myAnimals) console.log(v);  
                                        // Brownie Greenie Lucky Spotty

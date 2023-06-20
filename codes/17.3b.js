class AnimalsList {
   constructor(...args) { 
      this.animals = args;
   }
   *[Symbol.iterator]() { return this.animals.values(); }
}

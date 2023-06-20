class Food{
   constructor(b){
      if (new.target === Food)   
                                     // or:  this.contructor === Food
         throw new TypeError(
              "Cannot instantiate from an Abstract Class directly! Food");
      if (this.brand === undefined) 
         throw new TypeError("brand() must be defined -- Food");
   }
}
class DogFood extends Food{}
//var h = new Food;     
//TypeError: Cannot instantiate from an Abstract Class directly!-Food
var o = new DogFood;  
// TypeError: brand() must be defined – Food

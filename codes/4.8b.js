function Product(name, price) {
  this.name = name;
  this.price = price;
  return this;
}
function Food(name, price) {
   Product.call(this, name, price);
   this.category = 'food';
}
Food.prototype = Object.create(Product.prototype);
var cheese = new Food('feta', 5);

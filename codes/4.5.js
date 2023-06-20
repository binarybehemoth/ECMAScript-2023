function rectangle(a,b){
   this.width=a;   this.height=b;
   this.area=function(){return this.width*this.height;}
}
rectangle.prototype.perimeter = 
            function(){return 2*(this.width+this.height);}
rectangle.standardArea = 100;  // 'static' variable
rectangle.findAreaFromSideLengths = 
            (a,b)=>{return a*b;};  // 'static' function

var r=new rectangle(10,20);
r.height=30;
console.log(r.area()); // 300
console.log(r.perimeter()); // 80
console.log(rectangle.standardArea);  // 100
console.log(rectangle.findAreaFromSideLengths(5,6)); // 30

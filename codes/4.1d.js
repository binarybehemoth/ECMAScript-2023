function changeStuff(n, o1, o2){
   n = n * 10;
   o1.item = "changed";
   o2 = {item: "changed"};
}
var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};
changeStuff(num, obj1, obj2);
console.log(num);        // 10 (unchanged)
console.log(obj1.item);  // changed
console.log(obj2.item);  // unchanged

const value = function* () {
   let i = 0;
   while(true) yield ++i;
}();
Object.defineProperty(this, 'a', {
  get() {return value.next().value;}
});
if(a == 1 && a == 2 && a == 3) console.log('possible 7');

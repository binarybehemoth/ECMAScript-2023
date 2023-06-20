var i = 0;
Object.defineProperty(window, 'a', {
  get: function() {return ++val;}
});
if(a == 1 && a == 2 && a == 3) console.log('possible 9');

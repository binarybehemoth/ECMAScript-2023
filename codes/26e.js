var i = 0;
with({
  get a() {return ++i;}
}) {
  if(a == 1 && a == 2 && a == 3) console.log('possible 5');
}

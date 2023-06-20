var animals = [ { species: 'Lion', name: 'King' },  
                       { species: 'Whale', name: 'Willy' }];
for (let i = 0; i < animals.length; i++) {
   (function(i) {
      console.log('#' + i + ' ' + this.species + ': ' + this.name);
   }).call(animals[i], i);
}
// #0 Lion: King
// #1 Whale: Willy

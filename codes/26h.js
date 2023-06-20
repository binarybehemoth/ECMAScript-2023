var a = { valueOf: () => this.n = (this.n || 0) % 3 + 1}
if(a == 1 && a == 2 && a == 3) console.log('possible 8');

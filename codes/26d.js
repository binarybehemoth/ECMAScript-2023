class Thing {
    constructor() {this.value = 1;}
    valueOf() {return this.value++;}
}
Var a = new Thing();
if(a == 1 && a == 2 && a == 3) console.log('possible 4');

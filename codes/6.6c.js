class C1{
    v1 = 1;    // public instance field, accessible everywhere
    #v2;        // private instance field, accessible only within this class
    constructor(value){
        this.#v2 = value;
    }
    #m1(){ console.log(this.#v2); }
    m2(v){ this.#m1(); }
    get #g() { return this.#v2; }
    set #s(v) { this.#v2 = v; }
}
class C2 extends C1{
    constructor(value){
        super(value);
        console.log(this.v1);    // 1
        // this.v4 = this.#v2;   // SyntaxError
        this.m2();                   // 2
        // this.#m1();             // SyntaxError
    }
}
const o = new C2(2);

console.log(o.v1);  // 1
o.s = 3;                 // value not set by private settter
console.log(o.g);    // value not printed by private getter

// console.log(o.#v2);
// Uncaught SyntaxError: Private field '#v2' must be declared in an enclosing class

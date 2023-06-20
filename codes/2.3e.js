function f(){
    return {a:1, b:2};
}
var a = 3;
var {a,b} = f();   // do not omit ‘var’
console.log(a,b);    // 1 2

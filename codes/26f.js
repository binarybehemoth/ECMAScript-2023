var a = new Proxy({ i: 0 }, {
get: (target, name) => name === 
    Symbol.toPrimitive ? () => ++target.i : target[name],
});
if(a == 1 && a == 2 && a == 3) console.log('possible 6');

var a = new Set([1,2,3]);
var b = new Set([1,3,2]);

alert(eqSet(a, b)); // true

function eqSet(as, bs) {
    if (as.size !== bs.size) return false;
    for (var a of as) if (!bs.has(a)) return false;
    return true;
}

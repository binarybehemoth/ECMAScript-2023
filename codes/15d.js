const wmap = new WeakMap();
const k = Symbol('my ref');
const o = { x:10 };
wmap.set(k, o);

// module.js
var a = 10;
var m = 20;
export {a,a as aa};
export var b = 30;      // also let, const
export function f(){return m;};
export class cl{}
export let {c} = {c:40,d:50};

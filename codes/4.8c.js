function constructor(spec) {
   let {member} = spec,
      {other}  = other_constructor(spec),
      method   = function () {
          // accesses member, other, method, spec
      };
   return Object.freeze({
      method,
      other
   });
}

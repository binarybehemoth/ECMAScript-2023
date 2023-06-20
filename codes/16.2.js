const r = new FinalizationRegistry(msg => {
   console.log(msg);
});
(() => {   // private closure
   const obj = {};
   r.register(obj,"Just got garbage-collected");
})();

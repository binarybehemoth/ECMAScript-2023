(async function() {
  try {
      await new Promise(x=>x);
      throw 'y';
  } catch(e) {
      console.log(e);
  }
})();  // (no output)

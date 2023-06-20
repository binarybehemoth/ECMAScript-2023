<!DOCTYPE html><html><head></head><body><script>
   try {
      asdd(5);
   } catch(err){
      document.write(err.message);
   } finally {
      document.write(".");
   }
   document.write(" program not halted.");
   // asdd is not defined. program not halted.
</script></body></html>

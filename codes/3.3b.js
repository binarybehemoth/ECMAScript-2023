<!DOCTYPE html><html><head></head><body><script>
   try {
      var a=0;
      if (a==0) throw "Division by zero.";
      document.write(5/a);
   } catch(err){
      document.write(err);
   }
   throw "MyError";  // program halted here
   document.write("program halted.");
   // Division by zero.
</script></body></html>

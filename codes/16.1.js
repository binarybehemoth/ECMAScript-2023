<!DOCTYPE html>
<html>
<body>
   <p id="counter">0</p>
   <script>
   class Counter {
      constructor(element) {
         // Remember a weak reference to the DOM element
         this.ref = new WeakRef(element);
         this.start();
      }
      start() {
         this.count = 0;
         const tick = () => {
            const element = this.ref.deref();
            if (element) element.textContent = ++this.count;
            else {
               alert("The element is gone.");
               clearInterval(this.timer);
               this.ref = null;
            }
         };
         this.timer = setInterval(tick, 1000);
      }
   }
   const counter = new Counter(document.getElementById("counter"));
   setTimeout(() => {
      document.getElementById("counter").remove();
   }, 5000);
</script>
</body>
</html>

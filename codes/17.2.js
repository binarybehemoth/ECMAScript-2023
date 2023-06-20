var s = new String('hello');
                 // = “hello” will allow auto-boxing
s[Symbol.iterator] = function(){  
                 // always, [Symbol.iterator]() takes 0 argument
   return {   // the method must return an iterator
      next: function() {   // again, next() takes 0 argument
         if (this.i<2) {
            this.i++;
            return { value: "abc"[this.i], done: false };
         } else {
            return { done: true };
         }
      },
      i: -1
   };
}
for (v of s) console.log(v);  // a b c
console.log([...s]);  // ["a","b","c"]

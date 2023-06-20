// f();  // TypeError:
{
   f(); // 'hi'
   function f() {console.log('hi');}
}
f(); // ReferenceError if in Strict Mode

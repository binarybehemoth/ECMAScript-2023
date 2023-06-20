class Test {
  static msg = 'Hello!';
  static greeting(){
    console.log(Test.msg);
  }
}
Test.msg = 'Hi!';
Test.greeting();   // Hi!

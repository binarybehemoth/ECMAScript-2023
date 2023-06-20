function f(){
   throw new Error('dummy error', {cause: 'too dummy'});
}
try{
   f();
}catch(e){
   console.log(e);           // Error: dummy error
   console.log(e.cause);  // too dummy
}

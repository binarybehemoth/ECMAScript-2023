// work.js
onmessage = n=>{
   postMessage('abcdefghijklmnopqrstwxyz'[
                                       Math.floor(Math.random()*26)]);
}

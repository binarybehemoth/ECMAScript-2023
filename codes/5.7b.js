async function wait3s(){
    return await new Promise(resolve=>{
        setTimeout(resolve,3000,"done");
    });
}

console.log(wait3s());
// won't work...Promise {<pending>}

(async ()=>{console.log(await wait3s());})();  
// immediately invoked function expression (IIFE), will work...done

wait3s().then(console.log);
// will work...done

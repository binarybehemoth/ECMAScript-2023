function promptForInput(){
    return new Promise(resolve=>{
        resolve(prompt("Give me a number:"));
    });
}
function background_IO_Work(n){
    return new Promise(resolve=>{
        setTimeout(()=>resolve(n),2000);
    });
}
async function start_demo(){
    let v = await Promise.all([background_IO_Work(10),
                                         promptForInput()]);
    alert(v[0]*v[1]);
}
start_demo();

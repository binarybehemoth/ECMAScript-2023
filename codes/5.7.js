function sleep(duration){
    return new Promise(resolve=>{
        setTimeout(resolve, duration);
    });
}

async function start_demo(){
    sleep(1000).then(()=>{
        alert("with promise. before. 1 level of indentation.");
    });
    await sleep(5000);
    alert("with async. now. no indentation.")
}

start_demo();

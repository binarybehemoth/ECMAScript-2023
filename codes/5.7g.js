function divide(n){
    return new Promise((resolve,reject)=>{
        let d = prompt("Divide 100 by :");
        if (d==0) reject("Division by zero.");
        else         resolve(n/d);
    });
}

async function start_demo(){
    alert(await divide(100).catch(alert));
    // on input 5: 20
    // on input 0: Division by zero. --> undefined

    try{
        await divide(100);
    } catch (e){
        alert(e);
    }
}

start_demo();

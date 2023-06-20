function sleep(duration){
    return new Promise(resolve=>{
        setTimeout(resolve, duration);
    });
}
(async ()=>{
    await sleep(5000);
    alert("5 seconds passed");
})();
alert(“wait started.”);

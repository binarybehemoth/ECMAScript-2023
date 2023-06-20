<!DOCTYPE html><html><body>
<input type="button" value="now" onclick="R(1)"/>
<script>
var R;
function deferred_promise(){
    return new Promise(resolve=>{
        R=resolve;
    })
}
deferred_promise().then(alert);
</script>
</body></html>
